import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Price } from '../models/price';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoboAdvisorService {
  private url = 'http://localhost:8080/api/roboadvisor/buy';
  constructor(private http: HttpClient) {}

  getPrices(clientId: string): Observable<Price[]> {
    return this.http.get<Price[]>(`${this.url}/${clientId}`);
  }
}
