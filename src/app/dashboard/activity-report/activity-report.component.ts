import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { PdfService } from 'src/app/services/pdf.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TradeHistoryService } from 'src/app/services/trade-history.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activity-report',
  templateUrl: './activity-report.component.html',
  styleUrls: ['./activity-report.component.css']
})
export class ActivityReportComponent {

  stocks: any[] = [];
  tradeHistory: any[] = [];
  buyStocks: any[] = [];
  sellStocks: any[] = [];
  clientId = sessionStorage.getItem('clientId');
  defaultClientId: string = this.clientId ?? '100';
  constructor(private pdfService: PdfService, private portfolioService: PortfolioService, private tradeHistoryService: TradeHistoryService) {}
  
  generatePortfolioReport(): void {
    this.portfolioService.getPortfolio(this.defaultClientId).subscribe({
      next: (data) => {
        this.stocks = data;
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
    setTimeout(() => {
      const portfolioData = this.stocks;

      this.pdfService.generatePortfolioPDF(portfolioData);
    }, 100);
  }

  generateTradeReport() {
    this.tradeHistoryService.getTradeHistory(this.defaultClientId).subscribe({
      next: (data) => {
        this.tradeHistory = data;
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
    setTimeout(() => {
      const tradeHistoryData = this.tradeHistory;

      this.pdfService.generateTradeReport(tradeHistoryData);
    }, 100);
  }
    
  generateBuyReport() {
    this.tradeHistoryService.getTradeHistory(this.defaultClientId).subscribe({
      next: (data) => {
        this.buyStocks = data.filter((item) => item.direction === 'B');
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
    setTimeout(() => {
      const buyStocksData = this.buyStocks;
      this.pdfService.generateBuyStocksReport(buyStocksData);
    }, 100)
  }

  generateSellReport() {
    this.tradeHistoryService.getTradeHistory(this.defaultClientId).subscribe({
      next: (data) => {
        this.sellStocks = data.filter((item) => item.direction === 'S');
      },
      error: (error) => {
        Swal.fire('Error fetching trade history', error, 'error');
      }
    });
    setTimeout(() => {
      const sellStocksData = this.sellStocks;
      this.pdfService.generateSellStocksReport(sellStocksData);
    }, 100)
  }
}
