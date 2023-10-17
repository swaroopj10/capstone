import { IncomeCategory } from "src/app/models/income-category.enum";
import { InvestmentLength } from "src/app/models/investment-length.enum";

export function mapIncomeCategory(incomeCategoryValue: string): IncomeCategory{
  switch (incomeCategoryValue) {
    case 'BELOW_TWENTY_THOUSAND':
      return IncomeCategory.BELOW_TWENTY_THOUSAND;
    case 'TWENTY_TO_FORTY':
      return IncomeCategory.TWENTY_TO_FORTY;
    case 'FORTY_TO_SIXTY':
      return IncomeCategory.FORTY_TO_SIXTY;
    case 'SIXTY_TO_EIGHTY':
      return IncomeCategory.SIXTY_TO_EIGHTY;
    case 'EIGHTY_TO_ONE_LAKH':
      return IncomeCategory.EIGHTY_TO_ONE_LAKH;
    case 'ONE_LAKH_TO_ONE_LAKH_FIFTY':
      return IncomeCategory.ONE_LAKH_TO_ONE_LAKH_FIFTY;
    case 'ABOVE_ONE_LAKH_FIFTY':
      return IncomeCategory.ABOVE_ONE_LAKH_FIFTY;
    default:
      return IncomeCategory.FORTY_TO_SIXTY; 
  }
}

export function mapInvestmentLength(investmentLengthValue: string): InvestmentLength {
  switch (investmentLengthValue) {
    case 'ZERO_TO_FIVE':
      return InvestmentLength.ZERO_TO_FIVE;
    case 'FIVE_TO_SEVEN':
      return InvestmentLength.FIVE_TO_SEVEN;
    case 'SEVEN_TO_TEN':
      return InvestmentLength.SEVEN_TO_TEN;
    case 'TEN_TO_FIFTEEN':
      return InvestmentLength.TEN_TO_FIFTEEN;
    default:
      return InvestmentLength.TEN_TO_FIFTEEN; // Handle unknown values
  }
}

export function  mapIncomeCategoryInsert(selectedValue: string): string {
  switch (selectedValue) {
    case '0-20,000':
      return 'BELOW_TWENTY_THOUSAND';
    case '20,001-40,000':
      return 'TWENTY_TO_FORTY';
    case '40,001-60,000':
      return 'FORTY_TO_SIXTY';
    case '60,001-80,000':
      return 'SIXTY_TO_EIGHTY';
    case '80,001-100,000':
      return 'EIGHTY_TO_ONE_LAKH';
    case '100,001-150,000':
      return 'ONE_LAKH_TO_ONE_LAKH_FIFTY';
    case '150,000+':
      return 'ABOVE_ONE_LAKH_FIFTY';
    default:
      return '';
  }
}

export function mapInvestmentLengthInsert(selectedValue: string): string {
  switch (selectedValue) {
    case '0-5 Years':
      return 'ZERO_TO_FIVE';
    case '5-7 Years':
      return 'FIVE_TO_SEVEN';
    case '7-10 Years':
      return 'SEVEN_TO_TEN';
    case '10-15 Years':
      return 'TEN_TO_FIFTEEN';
    default:
      return '';
  }
}
