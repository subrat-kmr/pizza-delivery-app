
import { Pizza } from '../model/pizza.model';

export interface PizzaState {
  pizzas: Pizza[];
}

export const initialPizzaState: PizzaState = {
  pizzas: []
};
