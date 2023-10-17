import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ClientResponse } from '../models/client-response';
import { InvestmentPreference } from '../models/investment-preference';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/login'; 
  private baseUrl = 'http://localhost:8080/api/preferences/listPreference';
  constructor(private http: HttpClient) {}

  checkInvestmentPreferences(clientId: string): Observable<boolean> {
    if (!clientId) {
     console.log(clientId);
      return of(false);
    }
  
    const url = `${this.baseUrl}/${clientId}`;
      
    return this.http.get<InvestmentPreference>(url).pipe(
      map((response: InvestmentPreference) => {
        if (response !== null) {
          return true; 
        } else {
          return false; 
        }
      }),
      catchError(() => {
        return of(false); 
      })
    );
  }
  
  
  login(email: string, clientId: string): Observable<ClientResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      email: email,
      clientId: clientId,
    };

    return this.http.post<ClientResponse>(`${this.apiUrl}`, body, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(() => new Error('Client ID or Email does not exist.'));
        } else if (error.status === 500) {
          return throwError(() => new Error('Internal Server Error'));
        } else {
          return throwError(() => new Error('An error occurred.'));
        }
      })
    );
  }
}
