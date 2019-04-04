import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private api = 'http://localhost:5001/api';

  constructor(private http: HttpClient) { }


  listSales(): Observable<any> {
    return this.http.get<any>(`${this.api}/sales`);
  }

  listClients(): Observable<any> {
    return this.http.get<any>(`${this.api}/clients`);
  }

  listProducts(): Observable<any> {
    return this.http.get<any>(`${this.api}/products`);
  }
}
