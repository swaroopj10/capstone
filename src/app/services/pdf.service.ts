import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generateSellStocksReport(data: any[]) {
    const doc = new jsPDF();
    doc.text('Sell Trade Report', 10, 10);
    const headers = ['Instrument ID', 'Quantity', 'Execution Price', 'Direction', 'Client ID', 'Trade ID', 'Cash Value'];
    const tableData = data.map((item) => [
      item.instrumentId,
      item.quantity.toFixed(2),
      item.executionPrice.toFixed(2),
      item.direction,
      item.clientId,
      item.tradeId,
      item.cashValue.toFixed(2)
    ]);
    autoTable(doc,{
      head: [headers],
      body: tableData,
      startY: 20
    });

    doc.save('sell-trade.pdf');
  }
  generateBuyStocksReport(data: any[]) {
    const doc = new jsPDF();
    doc.text('Buy Trade Report', 10, 10);
    const headers = ['Instrument ID', 'Quantity', 'Execution Price', 'Direction', 'Client ID', 'Trade ID', 'Cash Value'];
    const tableData = data.map((item) => [
      item.instrumentId,
      item.quantity.toFixed(2),
      item.executionPrice.toFixed(2),
      item.direction,
      item.clientId,
      item.tradeId,
      item.cashValue.toFixed(2)
    ]);
    autoTable(doc,{
      head: [headers],
      body: tableData,
      startY: 20
    });

    doc.save('buy-trade.pdf');
  }
  generateTradeReport(data: any[]) {
    const doc = new jsPDF();
    doc.text('Trade History Report', 10, 10);
    const headers = ['Instrument ID', 'Quantity', 'Execution Price', 'Direction', 'Client ID', 'Trade ID', 'Cash Value'];
    const tableData = data.map((item) => [
      item.instrumentId,
      item.quantity.toFixed(2),
      item.executionPrice.toFixed(2),
      item.direction,
      item.clientId,
      item.tradeId,
      item.cashValue.toFixed(2)
    ]);
    autoTable(doc,{
      head: [headers],
      body: tableData,
      startY: 20
    });

    doc.save('tradeHistory.pdf');
  }
  generatePortfolioPDF(data: any[]) {
    const doc = new jsPDF();
    doc.text('Portfolio Report', 10, 10);
    const headers = ['Instrument ID', 'Quantity', 'Execution Price', 'Client ID', 'Trade ID', 'Cash Value'];
    const tableData = data.map((item) => [
      item.instrumentId,
      item.quantity.toFixed(2),
      item.executionPrice.toFixed(2),
      item.clientId,
      item.tradeId,
      item.cashValue.toFixed(2)
    ]);
    autoTable(doc,{
      head: [headers],
      body: tableData,
      startY: 20
    });

    doc.save('portfolio.pdf');
  }

  constructor() { }
}
