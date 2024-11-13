import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../user.state';


export const selectUserState = (state: any) => state.UserState;

  export const userInfo = createSelector(
    selectUserState,
    (state: UserState) => {
        return state.user}
  );