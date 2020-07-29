import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';
import { switchMap, map, catchError } from 'rxjs/operators';
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

export const createPizzaEpic = (action$, state$, { pizzasService }: { pizzasService: PizzasService }) => {
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA),
      switchMap((action: any) =>
         pizzasService
            .createPizza(action.payload)
            .pipe(
               map(({ response }) => new fromActions.CreatePizzaSuccess(response)),
               catchError(error => of(new fromActions.CreatePizzaFail(error)))
            )
      )
   );
};

export const createPizzaSuccessEpic = (action$, state$) => {
   return action$.pipe(
      ofType(fromActions.CREATE_PIZZA_SUCCESS),
      map((action: fromActions.CreatePizzaSuccess) => action.payload),
      map((pizza: Pizza) => {
         return push(`/products`);
      })
   );
};

export const updatePizzaEpic = (action$, state$, { pizzasService }: { pizzasService: PizzasService }) => {
   return action$.pipe(
      ofType(fromActions.UPDATE_PIZZA),
      switchMap((action: fromActions.UpdatePizza) =>
         pizzasService
            .updatePizza(action.payload)
            .pipe(
               map(({ response }) => new fromActions.UpdatePizzaSuccess(response)),
               catchError(error => of(new fromActions.UpdatePizzaFail(error)))
            )
      )
   );
};

export const removePizzaEpic = (action$, state$, { pizzasService }: { pizzasService: PizzasService }) => {
   return action$.pipe(
      ofType(fromActions.REMOVE_PIZZA),
      switchMap((action: fromActions.RemovePizza) =>
         pizzasService
            .removePizza(action.payload)
            .pipe(
               map(({ response }) => new fromActions.RemovePizzaSuccess(response)),
               catchError(error => of(new fromActions.RemovePizzaFail(error)))
            )
      )
   );
};

export const handlePizzaSuccessEpic = (action$, state$) => {
   return action$.pipe(
      ofType(
         fromActions.UPDATE_PIZZA_SUCCESS,
         fromActions.REMOVE_PIZZA_SUCCESS
      ),
      map((pizza: Pizza) => {
         return push(`/products`);
      })
   );
};
