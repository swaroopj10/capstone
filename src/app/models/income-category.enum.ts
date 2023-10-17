export enum IncomeCategory {
    NONE = '',
    BELOW_TWENTY_THOUSAND = '0-20,000',
    TWENTY_TO_FORTY = '20,001-40,000',
    FORTY_TO_SIXTY = '40,001-60,000',
    SIXTY_TO_EIGHTY = '60,001-80,000',
    EIGHTY_TO_ONE_LAKH = '80,001-100,000',
    ONE_LAKH_TO_ONE_LAKH_FIFTY = '100,001-150,000',
    ABOVE_ONE_LAKH_FIFTY = '150,000+',
  }
  
  export function getIncomeCategoryLabel(category: IncomeCategory): string {
    switch (category) {
      case IncomeCategory.NONE:
        return '';
      case IncomeCategory.BELOW_TWENTY_THOUSAND:
        return '0-20,000';
      case IncomeCategory.TWENTY_TO_FORTY:
        return '20,001-40,000';
      case IncomeCategory.FORTY_TO_SIXTY:
        return '40,001-60,000';
      case IncomeCategory.SIXTY_TO_EIGHTY:
        return '60,001-80,000';
      case IncomeCategory.EIGHTY_TO_ONE_LAKH:
        return '80,001-100,000';
      case IncomeCategory.ONE_LAKH_TO_ONE_LAKH_FIFTY:
        return '100,001-150,000';
      case IncomeCategory.ABOVE_ONE_LAKH_FIFTY:
        return '150,000+';
      default:
        return 'Unknown';
    }
  }
  