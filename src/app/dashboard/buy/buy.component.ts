import { Component } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';



@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  stocks: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  buyStock(stock: any) {
    if (stock.quantityToBuy > 0) {
      const success = this.stockService.executeBuyTrade(
        stock,
        stock.quantityToBuy
      );

      if (success) {
        this.stockService.availableBalance -= stock.price * stock.quantityToBuy;
        stock.quantityToBuy = 0;
        alert('The Stock was bought successfully');
      } else {
        alert('Trade could not be executed. Insufficient balance or stock not available.');
      }
    }
  }
}
