import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from '../service/order.service';
import { PizzaService } from '../service/pizza.service';

@Injectable({
  providedIn: 'root'
})
export class AllPizza implements Resolve<any> {
  constructor(private pizzaSvc: PizzaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.pizzaSvc.getPizzas();
  }
}