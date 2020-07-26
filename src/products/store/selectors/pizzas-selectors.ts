import { createSelector } from 'reselect';
import { matchPath } from 'react-router-dom';

import * as fromRoot from '../../../store/reducers';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas-reducer';
import * as fromToppings from './toppings-selectors';
import { Pizza } from '../../models/pizza';

export const getPizzaState = state => state.products.pizzas;
export const getRouterState = (state) => state.router;

export const getPizzasEntities = createSelector(
   getPizzaState,
   fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
   getPizzasEntities,
   getRouterState,
   (entities, router): Pizza => {
      const match: any = matchPath(
         router.location.pathname,
         { path: '/products/:pizzaId' }
      );
      const id = match?.params.pizzaId;
      return router && entities[id];
   }
);

export const getPizzaVisualised = createSelector(
   getSelectedPizza,
   fromToppings.getToppingEntities,
   fromToppings.getSelectedToppings,
   (pizza, toppingEntities, selectedToppings) => {
      const toppings = selectedToppings.map(id => { console.log('mapped IDs:', id); return toppingEntities[id]; });
      console.log('[SELECTOR] toppingEntities', toppingEntities);
      console.log('[SELECTOR] selectedToppings', selectedToppings);
      console.log('[SELECTOR] pizza & toppings', { ...pizza, toppings });
      return { ...pizza, toppings };
   }
);

export const getAllPizzas = createSelector(getPizzasEntities,
   entities => {
      return Object.keys(entities).map(id => entities[id]);
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