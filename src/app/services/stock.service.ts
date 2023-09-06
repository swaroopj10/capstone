import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  availableBalance: number = 100000000; 
  private stocks: any[] = [
    {
      "price": 5000,
      "instrumentId": "Q123",
      "externalIdType": "CUSIP",
      "externalId": "02079K107",
      "categoryId": "STOCK",
      "instrumentDescription": "Alphabet Inc. Class C Capital Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "price": 1000,
      "instrumentId": "Q456",
      "externalIdType": "CUSIP",
      "externalId": "88160R101",
      "categoryId": "STOCK",
      "instrumentDescription": "Tesla, Inc. Common Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "price": 1200,
      "instrumentId": "N123456",
      "externalIdType": "CUSIP",
      "externalId": "46625H100",
      "categoryId": "STOCK",
      "instrumentDescription": "JPMorgan Chase & Co. Capital Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "price": 2000,
      "instrumentId": "N123789",
      "externalIdType": "ISIN",
      "externalId": "US0846707026",
      "categoryId": "STOCK",
      "instrumentDescription": "Berkshire Hathaway Inc. Class A",
      "maxQuantity": 10,
      "minQuantity": 1
  },
  {
      "price": 500,
      "instrumentId": "C100",
      "externalIdType": "CUSIP",
      "externalId": "48123Y5A0",
      "categoryId": "CD",
      "instrumentDescription": "JPMorgan Chase Bank, National Association 01\/19",
      "maxQuantity": 1000,
      "minQuantity": 100
  },  
  ];

  private trades: any[] = [];
  private ownedStocks: any[] = [];

  getStocks() {
    return this.stocks;
  }

  getOwnedStocks() {
    return this.ownedStocks;
  }

  executeBuyTrade(stocks: any, quantity: number) {
    if (stocks.price * quantity > this.availableBalance) {
      return false;
    }
    const trade = {
      type: 'buy',
      instrumentId: stocks.instrumentId,
      quantity,
      price: stocks.price,
      timestamp: new Date(),
      externalIdType: stocks.externalIdType,
      externalId: stocks.externalId,
      categoryId: stocks.categoryId,
      instrumentDescription: stocks.instrumentDescription,
      maxQuantity: stocks.maxQuantity,
      minQuantity: stocks.minQuantity
    };
    this.trades.push(trade);
    const ownedStock = { ...stocks, quantityOwned: quantity };
    this.ownedStocks.push(ownedStock);

    return true;
  }

  executeSellTrade(stocks: any, quantity: number) {
    const ownedStock = this.ownedStocks.find((s) => s.instrumentId === stocks.instrumentId);
    if (quantity <= 0 || quantity > ownedStock.quantityOwned) {
      return false; 
    }

    const trade = {
      type: 'sell',
      instrumentId: stocks.instrumentId,
      quantity,
      price: stocks.price,
      timestamp: new Date(),
      externalIdType: stocks.externalIdType,
      externalId: stocks.externalId,
      categoryId: stocks.categoryId,
      instrumentDescription: stocks.instrumentDescription,
      maxQuantity: stocks.maxQuantity,
      minQuantity: stocks.minQuantity
    };
    this.trades.push(trade);
    ownedStock.quantityOwned -= quantity;
    this.availableBalance += ownedStock.price * quantity;

    if (ownedStock.quantityOwned === 0) {
      const index = this.ownedStocks.indexOf(ownedStock);
      if (index !== -1) {
        this.ownedStocks.splice(index, 1);
      }
    }
    return true; 
  }

  getTradeHistory() {
    console.log(this.trades);
    return this.trades;
  }

}
