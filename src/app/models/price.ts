import { Instrument } from "./instrument";

export class Price {
    instrumentId: string;
    bidPrice: number;
    askPrice: number;
    timestamp: string;
    instrument: Instrument;
    quantityToTrade: number;
    targetPrice: number;
  
    constructor(
      instrumentId: string,
      bidPrice: number,
      askPrice: number,
      timestamp: string,
      instrument: Instrument,
      quantityToTrade: number,
      targetPrice: number
    ) {
      this.instrumentId = instrumentId;
      this.bidPrice = bidPrice;
      this.askPrice = askPrice;
      this.timestamp = timestamp;
      this.instrument = instrument;
      this.quantityToTrade = quantityToTrade;
      this.targetPrice = targetPrice;
    }
  }
  