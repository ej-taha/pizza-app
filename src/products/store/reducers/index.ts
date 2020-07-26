import { combineReducers, $CombinedState } from 'redux';
import { combineEpics } from 'redux-observable';

import pizzas from './pizzas-reducer';
import toppings from './toppings-reducer';
import * as fromEpics from '../epics';
import { createSelector } from 'reselect';
import { RootState } from '../../../store/reducers';


export const productsEpic = combineEpics(
   fromEpics.fetchPizzasEpic,
   fromEpics.createPizzaEpic,
   fromEpics.fetchToppingsEpic
);

export const productsReducer = combineReducers({
   pizzas,
   toppings
});

export const getProductsState = (state) => state.products;

export type ProductsState = ReturnType<typeof productsReducer>;