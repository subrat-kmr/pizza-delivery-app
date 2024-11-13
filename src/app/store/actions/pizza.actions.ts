// src/app/store/actions/pizza.actions.ts
import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../model/pizza.model';

export const addToCart = createAction(
  '[Pizza List] Add to Cart',
  props<{ pizza: Pizza }>()
);

export const incrementQuantity = createAction(
    '[Pizza] Increment Quantity',
    props<{ pizzaId: string }>() // Pass the pizza's ID
  );
  
  // Action for decrementing the pizza quantity
  export const decrementQuantity = createAction(
    '[Pizza] Decrement Quantity',
    props<{ pizzaId: string }>() // Pass the pizza's ID
  );

  export const addAllPizzaa = createAction(
    '[Pizza] Add all pizza to store',
    props<{ pizza:Pizza[] }>() 
  );