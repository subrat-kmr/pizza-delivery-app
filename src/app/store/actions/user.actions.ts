// src/app/store/actions/pizza.actions.ts
import { createAction, props } from '@ngrx/store';

export const setUser = createAction(
  '[User] Set User Details',
  props<{ user:any }>()
);
