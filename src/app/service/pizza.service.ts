import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = 'http://localhost:3000/api/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }

  getPizzaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
