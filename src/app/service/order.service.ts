import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userInfo } from '../store/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/orders';
  user$: Observable<any>;
  userInfo:any

  constructor(private http: HttpClient,private store: Store) {
    this.user$ = this.store.select(userInfo);
    this.user$.subscribe(res => {this.userInfo = res})
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }


  getOrderHistory(): Observable<any> {
    return this.http.get(this.apiUrl+ '/' + this.userInfo.id);
  }
}
