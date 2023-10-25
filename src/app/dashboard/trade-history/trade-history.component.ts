import { Component } from '@angular/core';
import { TradeHistoryService } from 'src/app/services/trade-history.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent {
  stocks: any[] = [];
  clientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.clientId ?? '';

  constructor(private tradeHistoryService: TradeHistoryService) {}

  ngOnInit() {
    this.tradeHistoryService.getTradeHistory(this.defaultClientId).subscribe({
      next: (data) => {
        this.stocks = data;
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
  }
}
