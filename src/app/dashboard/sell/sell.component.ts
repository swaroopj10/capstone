import { Component } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  ownedStocks: any[] = [];
  quantityToSell: number = 0;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.ownedStocks = this.stockService.getOwnedStocks();
  }

  sellStock(stock: any) {
    if (stock && stock.quantity > 0) {
      const success = this.stockService.executeSellTrade(stock, stock.quantity);

      if (success) {
        stock.quantity = 0;
        stock = null;
        alert('Trade sell was successful');
      } else {
        alert('Trade could not be executed. Invalid quantity or stock not owned.');
      }
    }
  }
}
