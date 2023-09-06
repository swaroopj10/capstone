import { Component } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  stocks: any[] = [];
  constructor(private stockService: StockService) {};
  
  ngOnInit() {
    this.stocks = this.stockService.getOwnedStocks();
  }
}
