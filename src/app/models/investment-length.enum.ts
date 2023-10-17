export enum InvestmentLength {
    NONE = '',
    ZERO_TO_FIVE = '0-5 Years',
    FIVE_TO_SEVEN = '5-7 Years',
    SEVEN_TO_TEN = '7-10 Years',
    TEN_TO_FIFTEEN = '10-15 Years',
  }
  
  export function getInvestmentLengthLabel(length: InvestmentLength): string {
    switch (length) {
      case InvestmentLength.NONE:
        return '';
      case InvestmentLength.ZERO_TO_FIVE:
        return '0-5 Years';
      case InvestmentLength.FIVE_TO_SEVEN:
        return '5-7 Years';
      case InvestmentLength.SEVEN_TO_TEN:
        return '7-10 Years';
      case InvestmentLength.TEN_TO_FIFTEEN:
        return '10-15 Years';
      default:
        return 'Unknown';
    }
  }
  