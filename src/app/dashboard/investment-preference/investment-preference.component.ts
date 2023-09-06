import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-investment-preference',
  templateUrl: './investment-preference.component.html',
  styleUrls: ['./investment-preference.component.css']
})

  export class InvestmentPreferenceComponent {
    componentColor = "primary";
    formDataModel = {
      incomePurpose: '',
      incomeCategory: '',
      investmentLength: '',
      riskTolerance: '',
      acceptTerms: false
    };
  
  submittedData: any;
  
  riskTolerances: string[] = [ 'CONSERVATIVE', 'BELOW AVERAGE', 'AVERAGE', 'ABOVE AVERAGE', 'AGGRESSIVE'];
  incomeCategories: string[] = [ '0 - 20,000', '20,001 - 40,000', '40,001 - 60,000', '60,001 - 80,000', '80,001 - 100,000', '100,001 - 150,000', '150,000+'];
  investmentLengths: string[] = [ '0-5 years', '5-7 years', '7-10 years', '10-15 years' ];
  
    onSubmit(formData: any): void {
      if (formData.valid) {
        // Save the data (e.g., send it to an API)
        console.log('Submitted Data:', this.formDataModel);
  
        // Update the form data with submitted values
        this.submittedData = { ...this.formDataModel };
  
        // Display an alert that preferences have been updated
        alert('Preferences have been updated.');
      }
    }

    onCheckboxChange(event: any): void {
      this.formDataModel.acceptTerms = event.checked;
    }
  }  

