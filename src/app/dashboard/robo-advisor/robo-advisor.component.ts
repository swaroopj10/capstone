import { Component } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-robo-advisor',
  templateUrl: './robo-advisor.component.html',
  styleUrls: ['./robo-advisor.component.css']
})
export class RoboAdvisorComponent {
  buyStocks: any[] = [
    {
      "instrumentId": "Q123",
      "externalIdType": "CUSIP",
      "externalId": "02079K107",
      "categoryId": "STOCK",
      "instrumentDescription": "Alphabet Inc. Class C Capital Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "instrumentId": "Q456",
      "externalIdType": "CUSIP",
      "externalId": "88160R101",
      "categoryId": "STOCK",
      "instrumentDescription": "Tesla, Inc. Common Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "instrumentId": "N123456",
      "externalIdType": "CUSIP",
      "externalId": "46625H100",
      "categoryId": "STOCK",
      "instrumentDescription": "JPMorgan Chase & Co. Capital Stock",
      "maxQuantity": 1000,
      "minQuantity": 1
  },
  {
      "instrumentId": "N123789",
      "externalIdType": "ISIN",
      "externalId": "US0846707026",
      "categoryId": "STOCK",
      "instrumentDescription": "Berkshire Hathaway Inc. Class A",
      "maxQuantity": 10,
      "minQuantity": 1
  },
  {
      "instrumentId": "C100",
      "externalIdType": "CUSIP",
      "externalId": "48123Y5A0",
      "categoryId": "CD",
      "instrumentDescription": "JPMorgan Chase Bank, National Association 01\/19",
      "maxQuantity": 1000,
      "minQuantity": 100
  },
];

sellStocks: any[]= [];
constructor(private stockService: StockService) {}
ngOnInit() {
  this.sellStocks = this.stockService.getOwnedStocks();
}

}
