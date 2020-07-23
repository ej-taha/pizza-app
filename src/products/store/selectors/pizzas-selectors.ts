import { createSelector } from 'reselect';

import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas-reducer';

export const getPizzaState = (state: fromFeature.ProductsState) => state.pizzas;

export const getPizzaEntities = createSelector(
   getPizzaState,
   fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(getPizzaEntities,
   entities => {
      return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
   }
);

export const getPizzasLoaded = createSelector(
   getPizzaState,
   fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
   getPizzaState,
   fromPizzas.getPizzasLoading
);