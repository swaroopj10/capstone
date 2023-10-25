import { Component } from '@angular/core';
import { Price } from 'src/app/models/price';
import { BuyService } from 'src/app/services/buy.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  stocks: any[] = [];
 

  constructor(private buyService: BuyService) {}

  ngOnInit() {
    this.getPrices(); 
  }

  getPrices() {
    this.buyService.getPrices()
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
}
