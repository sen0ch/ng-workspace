import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from './element';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serviceUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getData(): Observable<Element[]> {
    return this.http.get<Element[]>(`${this.serviceUrl}/PeriodicElement`);
        }
}
