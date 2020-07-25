import { createSelector } from 'reselect';

import * as fromRoot from '../../../store/reducers';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas-reducer';
import * as fromToppings from './toppings-selectors';
import { Pizza } from '../../models/pizza';

export const getPizzaState = state => state.products.pizzas;
// export const getLocation = (state, props) => props.match;

export const getPizzasEntities = createSelector(
   getPizzaState,
   fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
   getPizzasEntities,
   (entities): Pizza => {
      console.log('[SELECTOR]', entities);
      console.log('[SELECTOR]', entities[1]);
      return entities[1];
   }
);

export const getPizzaVisualised = createSelector(
   getSelectedPizza,
   fromToppings.getToppingEntities,
   fromToppings.getSelectedToppings,
   (pizza, toppingEntities, selectedToppings) => {
      const toppings = selectedToppings.map(id => toppingEntities[id]);
      console.log('[SELECTOR] toppingEntities', toppingEntities);
      console.log('[SELECTOR] selectedToppings', selectedToppings);
      console.log('[SELECTOR] pizza & toppings', { ...pizza, toppings });
      return { ...pizza, toppings };
   }
);

export const getAllPizzas = createSelector(getPizzasEntities,
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