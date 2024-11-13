import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface UserState {
  user: any;
}

const initialState: UserState = {
  user: {}
};

export const userReducer = createReducer(
    initialState,   
    on(UserActions.setUser, (state, user) => {
        return({...state,user})
    })
  );