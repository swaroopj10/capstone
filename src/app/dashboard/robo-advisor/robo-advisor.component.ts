import { Component } from '@angular/core';
import { Price } from 'src/app/models/price';
import { BuyService } from 'src/app/services/buy.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { RoboAdvisorService } from 'src/app/services/robo-advisor.service';
import { SellService } from 'src/app/services/sell.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-robo-advisor',
  templateUrl: './robo-advisor.component.html',
  styleUrls: ['./robo-advisor.component.css']
})
export class RoboAdvisorComponent {
  stocks: any[] = [];
  sellStocks: any[] = [];
  clientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.clientId ?? '100';

  constructor(private buyService: BuyService, private sellService: SellService, private portfolioService: PortfolioService, private roboAdvisorService: RoboAdvisorService) {}

  ngOnInit() {
    this.getPrices(); 

    this.portfolioService.getPortfolio(this.defaultClientId).subscribe({
      next: (data) => {
        this.sellStocks = data;
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
  }

  getPrices() {
    this.roboAdvisorService.getPrices(this.defaultClientId)
      .subscribe({
        next: (prices: any[]) => {
          this.stocks = prices;
        },
        error: (error) => {
          console.error('Error fetching prices:', error);
        }
      });
  }

  buyStock(price: Price) {
    if (
      price.quantityToTrade >= price.instrument.minQuantity &&
      price.quantityToTrade <= price.instrument.maxQuantity &&
      price.targetPrice <= price.askPrice * 1.05 && 
      price.targetPrice >= price.askPrice * 0.95 
    ) {
      // Call the executeBuy method and subscribe to the response
      this.buyService.executeBuy(
        price.instrument.instrumentId,
        price.quantityToTrade,
        price.targetPrice
      ).subscribe({
        next: (response) => {
          // Check if the response indicates success (you may need to adjust this based on your API response)
          if (response && response.success) {
            Swal.fire('Buy Trade executed successfully!');
          } else {
            Swal.fire('Trade could not be executed. Insufficient balance or stock not available.');
          }
        },
        error: (error) => {
          console.error('Error executing buy:', error);
          Swal.fire('Error executing buy. Please try again later.');
        },
        complete: () => {
          Swal.fire('Buy trade execution completed.');
        }
      });
    } else {
      Swal.fire('Conditions not satisfied. Please check quantity and target price.');
    }
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
