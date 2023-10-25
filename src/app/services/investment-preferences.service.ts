import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { InvestmentPreference } from '../models/investment-preference';

@Injectable({
  providedIn: 'root',
})
export class InvestmentPreferencesService {
  private preferencesUrl = 'https://a745151.roifmr.com/api/preferences';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<string> {
    let errorMessage = 'An error occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.status}, ${error.statusText}`;
    }
    return throwError(errorMessage);
  }

  getPreferences(clientId: string): Observable<any> {
    const url = `${this.preferencesUrl}/listPreference/${clientId}`;
    return this.http.get<any>(url).pipe(catchError((error) => this.handleError(error)));
  }

  insertInvestmentPreferences(data: InvestmentPreference): Observable<any> {
    console.log(data);
    const url = `${this.preferencesUrl}/insert`;
    return this.http.post(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateInvestmentPreferences(data: any): Observable<any> {
    const url = `${this.preferencesUrl}/update`;
    return this.http.put(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((error) => this.handleError(error)));
  }
}
