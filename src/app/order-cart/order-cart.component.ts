import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { PizzaState } from '../store/pizza.state';
import { allPizza } from '../store/selectors/pizza.selectors';

@Component({
  selector: 'app-order-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-cart.component.html',
  styleUrl: './order-cart.component.css'
})
export class OrderCartComponent {

  totalPizza$ = new Observable<Pizza[]>
  pizzaCart!:any[]
  totalPizzaValue = 0;

  constructor(private route: ActivatedRoute, private store: Store<PizzaState>, public pizzaService:PizzaService) {
    this.totalPizza$ = this.store.select(allPizza);
  }

  ngOnInit(): void {
    this.totalPizza$.subscribe((res)=> {
      this.pizzaCart = res.filter(item => item.addedToCart)
      this.cartTotal()
    })
  }

  cartTotal () {
    if (this.pizzaCart) {
      this.totalPizzaValue = 0
      this.pizzaCart.forEach(element => {
        this.totalPizzaValue = this.totalPizzaValue + (element.quantity * element.price)
      });
    }
  }

}
