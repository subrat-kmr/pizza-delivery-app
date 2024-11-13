import { createReducer, on } from '@ngrx/store';
import * as PizzaActions from '../actions/pizza.actions';
import { Pizza } from '../../model/pizza.model';

export interface PizzaState {
  pizzas: Pizza[];
}

const initialState: PizzaState = {
  pizzas: [] // Ensure the initial state has an empty array
};

export const pizzaReducer = createReducer(
  initialState,
  
  on(PizzaActions.addToCart, (state, { pizza }) => ({
    ...state,
    pizzas: state.pizzas.map(p =>
      p.id === pizza.id 
        ? { ...p, addedToCart: true, quantity: pizza.quantity + 1 || 1 }
        : p
    )
    // If the pizza does not exist, add it
    .concat(state.pizzas.some(p => p.id === pizza.id) 
        ? [] 
        : [{ ...pizza, addedToCart: true, quantity: pizza?.quantity || 1 }]
    )
  })),

  on(PizzaActions.decrementQuantity, (state, { pizzaId }) => ({
    ...state,
    pizzas: state.pizzas.map(p =>
      p.id === pizzaId
        ? {
            ...p,
            quantity: (p.quantity || 0) > 1 ? p.quantity - 1 : 0, 
            addedToCart: (p.quantity || 0) > 1 ? true : false, 
          }
        : p
    )
  })),  
  

  on(PizzaActions.addAllPizzaa, (state, { pizza }) => ({
    ...state,
    pizzas: pizza}))
);
