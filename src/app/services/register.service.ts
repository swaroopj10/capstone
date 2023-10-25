import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://a745151.roifmr.com/api/register'; 

  constructor(private http: HttpClient) {}

  registerClient(client: Client): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(`${this.apiUrl}`, client, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            Swal.fire('Error', 'Bad request: ' + error.error, 'error');
          } else if (error.status === 401) {
            Swal.fire('Error', 'Unauthorized: ' + error.error, 'error');
          } else if (error.status === 500) {
            Swal.fire('Error', 'Internal server error: ' + error.error, 'error');
          } else {
            Swal.fire('Error', 'An error occurred: ' + error.message, 'error');
          }

          return throwError('Something went wrong; please try again later.');
        })
      );
  }
}
