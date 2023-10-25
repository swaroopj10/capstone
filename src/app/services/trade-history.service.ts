import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradeHistoryService {
  private baseUrl = 'https://a745151.roifmr.com/api'; 

  constructor(private http: HttpClient) {}

  getTradeHistory(clientId: string): Observable<any[]> {
    const url = `${this.baseUrl}/tradeHistory/${clientId}`;

    return this.http.get<any[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred while fetching trade history';
        if (error.status === 404) {
          errorMessage = 'Trade history not found';
        } else if (error.status === 500) {
          errorMessage = 'Internal server error';
        }
        console.error(errorMessage);
        return throwError(() => new Error('An error occurred')); 
      })
    );
  }
}
