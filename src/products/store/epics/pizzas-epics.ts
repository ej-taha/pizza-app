import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions/pizzas-actions';
import { Pizza } from '../../models/pizza';


export const fetchPizzasEpic = (action$, state$, { getJSON }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_PIZZAS),
      mergeMap(() =>
         getJSON('http://localhost:5000/pizzas/').pipe(
            map((response: Pizza[]) => new fromActions.LoadPizzasSuccess(response))
         )
      )
   );
};

export const createPizzaEpic = (action$, state$, { post }) => {
   console.log('bloody here');
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      mergeMap((action: any) =>
         post('http://localhost:5000/pizzas/', action.payload, {
            headers: { 'Content-Type': 'application/json' }
         }
         ).pipe(
            map(({ response }) => new fromActions.CreatePizzaSuccess(response.created)),
            catchError(error => {
               console.log('error: ', error);
               return of(error);
            })
         )
      )
   );
};

//action creators
/* export function loadPizzas(): fromActions.PizzasAction {
   return {
      type: fromActions.LOAD_PIZZAS
   };
}

export function loadPizzasSuccess(payload: Pizza[]): fromActions.PizzasAction {
   return {
      type: fromActions.LOAD_PIZZAS_SUCCESS,
      payload
   };
}

export function loadPizzasFail(error: any): fromActions.PizzasAction {
   return {
      type: fromActions.LOAD_PIZZAS_FAIL,
      payload: error
   };
}

export const createPizza = (payload: Pizza) => {
   return {
      type: fromActions.CREATE_PIZZA,
      payload
   };
};

export function createPizzaSuccess(payload: Pizza): fromActions.PizzasAction {
   return {
      type: fromActions.CREATE_PIZZA_SUCCESS,
      payload
   };
}

export function createPizzaFail(error: any): fromActions.PizzasAction {
   return {
      type: fromActions.CREATE_PIZZA_FAIL,
      payload: error
   };
} */