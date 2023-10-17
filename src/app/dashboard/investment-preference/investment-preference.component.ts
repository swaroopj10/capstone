import { Component } from '@angular/core';
import { IncomeCategory, getIncomeCategoryLabel } from 'src/app/models/income-category.enum';
import { InvestmentLength, getInvestmentLengthLabel } from 'src/app/models/investment-length.enum';
import { InvestmentPreference } from 'src/app/models/investment-preference';
import { RiskTolerance } from 'src/app/models/risk-tolerance.enum';
import { InvestmentPreferencesService } from 'src/app/services/investment-preferences.service';
import Swal from 'sweetalert2';
import { mapIncomeCategory, mapIncomeCategoryInsert, mapInvestmentLength, mapInvestmentLengthInsert } from './enum-mapper';

@Component({
  selector: 'app-investment-preference',
  templateUrl: './investment-preference.component.html',
  styleUrls: ['./investment-preference.component.css']
})

export class InvestmentPreferenceComponent {

  constructor(private investmentPreferenceService: InvestmentPreferencesService) {}
  sessionClientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.sessionClientId ?? '100';
  incomeCategories: string[] = Object.values(IncomeCategory).map(getIncomeCategoryLabel);
  investmentLengths: string[] = Object.values(InvestmentLength).map(getInvestmentLengthLabel);
  riskTolerances: string[] = Object.values(RiskTolerance);
  componentColor = 'primary';
  formDataModel: InvestmentPreference = {
    clientId: this.defaultClientId,
    investmentPurpose: '',
    incomeCategory: IncomeCategory.NONE,
    investmentLength: InvestmentLength.NONE,
    riskTolerance: RiskTolerance.NONE
  };
  preferences: InvestmentPreference | undefined;

  ngOnInit(): void {
    this.loadInvestmentPreferences();
  }

  loadInvestmentPreferences(): void {
    this.investmentPreferenceService.getPreferences(this.defaultClientId).subscribe((data) => {
      this.preferences = data;
      if (this.preferences) {
        this.formDataModel.investmentPurpose = this.preferences.investmentPurpose;
        this.formDataModel.incomeCategory = mapIncomeCategory(this.preferences.incomeCategory);
        this.formDataModel.investmentLength = mapInvestmentLength(this.preferences.investmentLength);
        this.formDataModel.riskTolerance = this.preferences.riskTolerance;
      }
    });
  }

  onSubmit(formData: InvestmentPreference): void {
    const mappedFormData: any = {
      clientId: this.defaultClientId,
      investmentPurpose: formData.investmentPurpose,
      incomeCategory: mapIncomeCategoryInsert(formData.incomeCategory),
      investmentLength: mapInvestmentLengthInsert(formData.investmentLength),
      riskTolerance: formData.riskTolerance
    };
    if (this.preferences) {
      this.updateInvestmentPreferences(mappedFormData);
    } else {
      this.insertInvestmentPreferences(mappedFormData);
    }
  }

  insertInvestmentPreferences(formData: InvestmentPreference): void {
    this.investmentPreferenceService.insertInvestmentPreferences(formData).subscribe({
      next: (response) => {
        Swal.fire('Success', 'Investment preferences inserted successfully', 'success');
      },
      error: (error) => {
        Swal.fire('Error', 'Failed to insert investment preferences', 'error');
        console.error('Insert Error:', error);
      }
    });
  }

  updateInvestmentPreferences(formData: InvestmentPreference): void {
    this.investmentPreferenceService.updateInvestmentPreferences(formData).subscribe({
      next: (response) => {
        Swal.fire('Success', 'Investment preferences updated successfully', 'success');
      },
      error: (error) => {
        Swal.fire('Error', 'Failed to update investment preferences', 'error');
        console.error('Update Error:', error);
      }
    });
  }
}
