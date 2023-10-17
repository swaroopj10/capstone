export class Instrument {
    instrumentId: string;
    description: string;
    externalIdType: string;
    externalId: string;
    categoryId: string;
    minQuantity: number;
    maxQuantity: number;
  
    constructor(
      instrumentId: string,
      description: string,
      externalIdType: string,
      externalId: string,
      categoryId: string,
      minQuantity: number,
      maxQuantity: number
    ) {
      this.instrumentId = instrumentId;
      this.description = description;
      this.externalIdType = externalIdType;
      this.externalId = externalId;
      this.categoryId = categoryId;
      this.minQuantity = minQuantity;
      this.maxQuantity = maxQuantity;
    }
  }
  