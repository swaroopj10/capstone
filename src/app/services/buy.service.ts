import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Price } from '../models/price';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  private url = 'https://a745151.roifmr.com/api/sendTradeRequest';
  constructor(private http: HttpClient) {}
  executeBuy(
    instrumentId: string,
    quantity: number,
    targetPrice: number,
    orderId: string = uuidv4()
  ): Observable<any> {
    const clientId = sessionStorage.getItem('clientId');
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const direction = 'B';

    const order = {
      instrumentId,
      quantity,
      targetPrice,
      direction,
      orderId,
      clientId,
      email,
      token
    };
    console.log(order);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.url}`, order, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error executing buy:', error);
          return throwError(() => error); 
        })
      );
  }
  private apiUrl = 'https://a745151.roifmr.com/api/prices'; 


  getPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(`${this.apiUrl}`);
  }
}
