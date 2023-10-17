import { Order } from "./order";

export class Trade {
  instrumentId: string;
  quantity: number;
  executionPrice: number;
  direction: string;
  clientId: string;
  order: Order;
  tradeId: string;
  cashValue: number;

  constructor(
    instrumentId: string,
    quantity: number,
    executionPrice: number,
    direction: string,
    clientId: string,
    order: Order,
    tradeId: string,
    cashValue: number
  ) {
    this.instrumentId = instrumentId;
    this.quantity = quantity;
    this.executionPrice = executionPrice;
    this.direction = direction;
    this.clientId = clientId;
    this.order = order;
    this.tradeId = tradeId;
    this.cashValue = cashValue;
  }
}
