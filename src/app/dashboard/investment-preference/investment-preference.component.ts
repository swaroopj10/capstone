import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-investment-preference',
  templateUrl: './investment-preference.component.html',
  styleUrls: ['./investment-preference.component.css']
})
export class InvestmentPreferenceComponent {
  selectedInvestmentPurpose!: string;
  selectedRiskTolerance!: string;
  selectedIncomeCategory!: string;
  selectedInvestmentLength!: string;
  
  investmentPurposes: string[] = ['Retirement', 'Income', 'General'];
  riskTolerances: string[] = ['Low', 'Medium', 'High'];
  incomeCategories: string[] = ['Below 1L', '1L - 5L', '5L - 10L', '10L - 20L', 'Above 20L'];
  investmentLengths: string[] = ['Short-Term', 'Medium-Term', 'Long-Term'];

  previousData = {
    investmentPurpose : 'Retirement',
    riskTolerance : 'Medium',
    incomeCategory : '5L - 10L',
    investmentLength : 'Medium-Term'
  }

  ngOnInit() {
    this.selectedInvestmentPurpose = this.previousData.investmentPurpose;
    this.selectedRiskTolerance = this.previousData.riskTolerance;
    this.selectedIncomeCategory = this.previousData.incomeCategory;
    this.selectedInvestmentLength = this.previousData.investmentLength;
  }

  onSubmit() {
    this.previousData.investmentPurpose = this.selectedInvestmentPurpose;
    this.previousData.riskTolerance = this.selectedRiskTolerance;
    this.previousData.incomeCategory = this.selectedIncomeCategory;
    this.previousData.investmentLength = this.selectedInvestmentLength;
  }

  onInvestmentPurposeChange(event: MatSelectChange) {
    this.selectedInvestmentPurpose = event.value
  }

  onRiskToleranceChange(event: MatSelectChange) {
    this.selectedRiskTolerance = event.value
  }

  onIncomeCategoryChange(event: MatSelectChange) {
    this.selectedIncomeCategory = event.value
  }

  onInvestmentLengthChange(event: MatSelectChange) {
    this.selectedInvestmentLength = event.value
  }
}
