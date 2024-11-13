import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PizzaState } from '../pizza.state';


export const selectPizzaState = (state: any) => state.pizzaState;


export const selectPizzasInCart = createSelector(
    selectPizzaState,
    (state: PizzaState) => state?.pizzas?.filter(pizza => pizza.addedToCart) || [] // Safeguard against undefined
  );
  
  export const selectCartCount = createSelector(
    selectPizzasInCart,
    (pizzasInCart) => pizzasInCart.length
  );

  export const allPizza = createSelector(
    selectPizzaState,
    (state: PizzaState) => {
        console.log('state',state)
        return state?.pizzas}
  );