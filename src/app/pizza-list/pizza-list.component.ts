import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import * as PizzaActions from '../store/actions/pizza.actions';
import { PizzaState } from '../store/reducers/pizza.reducer';
import { allPizza } from '../store/selectors/pizza.selectors';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  pizzas: any
  totalPizza$ = new Observable<Pizza[]>
  constructor(private route: ActivatedRoute, private store: Store<PizzaState>, public pizzaService:PizzaService) {
    this.totalPizza$ = this.store.select(allPizza);
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.pizzas = data.pizzas;
      this.pizzas.forEach((pizza: Pizza) => {
        pizza.addedToCart = false;
      });
      this.store.dispatch(PizzaActions.addAllPizzaa({ pizza:this.pizzas }));
      console.log(this.pizzas);
    });
  }

  addToCart(pizza: Pizza) {
    this.store.dispatch(PizzaActions.addToCart({ pizza:pizza }));
  }

  incrementQuantity(pizza: Pizza) {
    this.store.dispatch(PizzaActions.addToCart({ pizza }));
  }

  decrementQuantity(pizza: Pizza) {
    this.store.dispatch(PizzaActions.decrementQuantity({ pizzaId:pizza.id }));
  }

  updateCart(pizza: Pizza) {
    console.log(`Updated ${pizza.name} quantity to ${pizza.quantity}`);
  }
}
