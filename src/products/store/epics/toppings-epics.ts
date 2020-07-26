import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions/toppings-actions';
import { Topping } from '../../models/topping';


export const fetchToppingsEpic = (action$, state$, { ajax }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_TOPPINGS),
      mergeMap(() =>
         ajax.getJSON('http://localhost:8081/api/toppings/').pipe(
            map((response: Topping[]) => new fromActions.LoadToppingsSuccess(response))
         )
      )
   );
};

//action creators
/* export function loadToppings(): fromActions.ToppingsAction {
   return {
      type: fromActions.LOAD_TOPPINGS
   };
}

export function loadToppingsSuccess(payload: Topping[]): fromActions.ToppingsAction {
   return {
      type: fromActions.LOAD_TOPPINGS_SUCCESS,
      payload
   };
}

export function loadToppingsFail(error: any): fromActions.ToppingsAction {
   return {
      type: fromActions.LOAD_TOPPINGS_FAIL,
      payload: error
   };
} */