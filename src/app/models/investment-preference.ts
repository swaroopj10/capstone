import { IncomeCategory } from "./income-category.enum";
import { InvestmentLength } from "./investment-length.enum";
import { RiskTolerance } from "./risk-tolerance.enum";

export class InvestmentPreference {
  clientId: string;
  investmentPurpose: string;
  investmentLength: InvestmentLength;
  riskTolerance: RiskTolerance;
  incomeCategory: IncomeCategory;

  constructor(
    clientId: string,
    investmentPurpose: string,
    investmentLength: InvestmentLength,
    riskTolerance: RiskTolerance,
    incomeCategory: IncomeCategory
  ) {
    this.clientId = clientId;
    this.investmentPurpose = investmentPurpose;
    this.investmentLength = investmentLength;
    this.riskTolerance = riskTolerance;
    this.incomeCategory = incomeCategory;
  }
}
