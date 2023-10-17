import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  private url = 'http://localhost:8080/api/sendTradeRequest';
  constructor(private http: HttpClient) {}
  executeSell(
    instrumentId: string,
    quantity: number,
    targetPrice: number,
    orderId: string = uuidv4()
  ): Observable<any> {
    const clientId = sessionStorage.getItem('clientId');
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const direction = 'S';

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
}
