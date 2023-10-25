import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  stocks: any[] = [];
  clientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.clientId ?? '100';
  availableBalance: number = 10000000;
  portfolioWorth:number = 0;
  constructor(private portfolioService: PortfolioService) {}

  calculateBalanceAndPortfolioWorth(stocks: any[]): void {
    this.portfolioWorth = 0;
  
    stocks.forEach((stock) => {
      const cashValue = stock.cashValue;
      const direction = stock.direction;
      if (direction === 'B') {
        this.portfolioWorth += cashValue;
      } else if (direction === 'S') {
        this.portfolioWorth -= cashValue;
      }
    });
  
    this.availableBalance = 10000000 - this.portfolioWorth;
    if(this.availableBalance < 0) {
      this.availableBalance = 0;
    }
  }

  ngOnInit() {
    this.portfolioService.getPortfolio(this.defaultClientId).subscribe({
      next: (data) => {
        this.stocks = data;
        this.calculateBalanceAndPortfolioWorth(data);
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
  }
}
