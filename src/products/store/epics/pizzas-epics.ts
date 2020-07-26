import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import axios from 'axios';

import * as fromActions from '../actions/pizzas-actions';
import { Pizza } from '../../models/pizza';


export const fetchPizzasEpic = (action$, state$, { ajax }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_PIZZAS),
      mergeMap(() =>
         ajax.getJSON('http://localhost:8081/api/pizzas/').pipe(
            map((response: Pizza[]) => new fromActions.LoadPizzasSuccess(response))
         )
      )
   );
};

/* export const createPizzaEpic = (action$, state$, { post }) => {
   console.log('bloody here');
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      mergeMap((action: any) =>
         post('http://localhost:8081/api/pizzas/', action.payload, {
            headers: { 'Content-Type': 'application/json' },
            
         }
         ).pipe(
            map(({ response }) => { console.log('RESPONSE', response); new fromActions.CreatePizzaSuccess(response.created); }),
            catchError(error => {
               return of(new fromActions.CreatePizzaFail(error));
            })
         )
      )
   );
}; */

export const createPizzaEpic = (action$, state$, { ajax }) => {
   console.log('bloody here');
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      mergeMap((action: any) =>
         ajax({
            url: 'http://localhost:8081/api/pizzas/',
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: action.payload
         }).pipe(
            map(({ response }) => new fromActions.CreatePizzaSuccess(response.created)),
            catchError(error => {
               return of(new fromActions.CreatePizzaFail(error));
            })
         )
      )
   );
};

/* export const createPizzaEpic = (action$, state$, { post }) => {
   console.log('bloody here');
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      mergeMap((action: any) =>
         axios.post('http://localhost:8081/api/pizzas/', action.payload, {
            headers: { 'Content-Type': 'application/json' }
         })
      )
   );
}; */

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