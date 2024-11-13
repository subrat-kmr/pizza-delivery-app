// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';  // Ensure Actions and ofType are imported
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { PizzaService } from '../../service/pizza.service';    // Correct path to service
// import * as PizzaActions from '../actions/pizza.actions';       // Import pizza actions

// @Injectable()
// export class PizzaEffects {

//   constructor(
//     private actions$: Actions,            // Inject Actions service
//     private pizzaService: PizzaService    // Inject the pizza service
//   ) {}

//   // Effect to load pizzas from the backend
//   loadPizzas$ = createEffect(() =>
//     this.actions$.pipe(                    // Use pipe on the actions observable
//       ofType(PizzaActions.loadPizzas),     // Trigger effect when 'loadPizzas' action is dispatched
//       mergeMap(() =>
//         this.pizzaService.getPizzas().pipe( // Call the service to fetch pizzas
//           map((pizzas) => PizzaActions.loadPizzasSuccess({ pizzas })),  // Dispatch success action with fetched pizzas
//           catchError((error) => of(PizzaActions.loadPizzasFailure({ error })))  // Handle errors
//         )
//       )
//     )
//   );
// }
