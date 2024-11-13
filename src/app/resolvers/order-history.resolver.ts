import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from '../service/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderHistory implements Resolve<any> {
  constructor(private orders: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.orders.getOrderHistory();
  }
}