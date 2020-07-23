import { createSelector } from 'reselect';

import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings-reducer';

export const getToppingsState = (state: fromFeature.ProductsState) => state.toppings;

export const getToppingEntities = createSelector(
   getToppingsState,
   fromToppings.getToppingsEntities
);

export const getAllToppings = createSelector(getToppingEntities,
   entities => {
      return Object.keys(entities).map(id => entities[id]);
   }
);

export const getSelectedToppings = createSelector(
   getToppingsState,
   fromToppings.getSelectedToppings
);

export const getToppingsLoaded = createSelector(
   getToppingsState,
   fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
   getToppingsState,
   fromToppings.getToppingsLoading
);