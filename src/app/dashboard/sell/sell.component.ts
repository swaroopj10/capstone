import { Component } from '@angular/core';
import { Price } from 'src/app/models/price';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SellService } from 'src/app/services/sell.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {

  stocks: any[] = [];
  clientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.clientId ?? '100';

  constructor(private sellService: SellService, private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getPortfolio(this.defaultClientId).subscribe({
      next: (data) => {
        this.stocks = data;
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
  }

  sellStock(price: any) {
     if(price.quantityToTrade > price.quantity) {
      Swal.fire('Quantity greater than available quantity');
     } else if(price.targetPrice <= price.executionPrice * 1.05 && 
      price.targetPrice >= price.executionPrice * 0.95) {
        this.sellService.executeSell(
          price.instrumentId,
          price.quantityToTrade,
          price.targetPrice
        ).subscribe({
          next: (response) => {
            if (response && response.success) {
              Swal.fire('Sell Trade executed successfully!');
            } else {
              Swal.fire('Trade could not be executed. Insufficient balance or stock not available.');
            }
          },
          error: (error) => {
            console.error('Error executing sell:', error);
            Swal.fire('Error executing sell. Please try again later.');
          },
          complete: () => {
            Swal.fire('Sell trade execution completed.');
          }
        });
      } else {
        Swal.fire('Invalid Price')
      }
  }
}
