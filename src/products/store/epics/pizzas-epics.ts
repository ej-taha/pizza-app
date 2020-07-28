import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions/pizzas-actions';
import { Pizza } from '../../models/pizza';
import { PizzasService } from '../../services';


export const fetchPizzasEpic = (action$, state$, { pizzasService }: { pizzasService: PizzasService }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_PIZZAS),
      switchMap(() => {
         return pizzasService
            .getPizzas()
            .pipe(
               map((response: Pizza[]) => new fromActions.LoadPizzasSuccess(response)),
               catchError(error => of(new fromActions.LoadPizzasFail(error)))
            );
      })
   );
};
/* export const fetchPizzasEpic = (action$, state$, { services }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_PIZZAS),
      mergeMap(() =>
         ajax.getJSON('https://whispering-atoll-09064.herokuapp.com/api/pizzas/').pipe(
            map((response: Pizza[]) => new fromActions.LoadPizzasSuccess(response))
         )
      )
   );
}; */

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

export const createPizzaEpic = (action$, state$, { pizzasService }: { pizzasService: PizzasService }) => {
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      switchMap((action: any) =>
         pizzasService
            .createPizza(action.payload)
            .pipe(
               map(({ response }) => new fromActions.CreatePizzaSuccess(response)),
               tap(foo => state$.subscribe(x => console.log(x))),
               catchError(error => of(new fromActions.CreatePizzaFail(error)))
            )
      )
   );
};

export const createPizzaEpicSuccess = (action$, state$) => {
   action$.subscribe(val => console.log('CREATEPIZZASUCCESS EPIC', val));
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA_SUCCESS),
      map((action: fromActions.CreatePizzaSuccess) => action.payload),
      map((pizza: Pizza) => {
         return push(`/products`);
      })
   );
};
