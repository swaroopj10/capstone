export class Order {
    instrumentId: string;
    quantity: number;
    targetPrice: number;
    direction: string;
    clientId: string;
    orderId: string;
    email: string;
    token: string;
  
    constructor(
      instrumentId: string,
      quantity: number,
      targetPrice: number,
      direction: string,
      clientId: string,
      orderId: string,
      email: string,
      token: string
    ) {
      this.instrumentId = instrumentId;
      this.quantity = quantity;
      this.targetPrice = targetPrice;
      this.direction = direction;
      this.clientId = clientId;
      this.orderId = orderId;
      this.email = email;
      this.token = token;
    }
  }
  