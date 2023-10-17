export enum RiskTolerance {
    NONE = '',
    CONSERVATIVE = 'CONSERVATIVE',
    BELOW_AVERAGE = 'BELOW_AVERAGE',
    AVERAGE = 'AVERAGE',
    ABOVE_AVERAGE = 'ABOVE_AVERAGE',
    AGGRESSIVE = 'AGGRESSIVE',
  }
  
  export function getRiskToleranceLabel(risk: RiskTolerance): string {
    switch (risk) {
      case RiskTolerance.NONE:
        return '';
      case RiskTolerance.CONSERVATIVE:
        return 'Conservative';
      case RiskTolerance.BELOW_AVERAGE:
        return 'Below Average';
      case RiskTolerance.AVERAGE:
        return 'Average';
      case RiskTolerance.ABOVE_AVERAGE:
        return 'Above Average';
      case RiskTolerance.AGGRESSIVE:
        return 'Aggressive';
      default:
        return 'Unknown';
    }
  }
  