import * as fromActions from '../actions/pizzas-actions';
import { Pizza } from '../../models/pizza';

export interface PizzaState {
   entities: { [id: number]: Pizza };
   loaded: boolean;
   loading: boolean;
}

export const initialState: PizzaState = {
   entities: {},
   loaded: false,
   loading: false,
};

export default function reducer(state = initialState, action: fromActions.PizzasAction): PizzaState {
   switch (action.type) {
      case fromActions.LOAD_PIZZAS: {
         return {
            ...state,
            loading: true,
         };
      }

      case fromActions.LOAD_PIZZAS_SUCCESS: {
         const pizzas = action.payload;

         const entities = pizzas.reduce(
            (entities: { [id: number]: Pizza }, pizza: Pizza) => {
               return {
                  ...entities,
                  [pizza.id]: pizza,
               };
            },
            {
               ...state.entities,
            }
         );

         return {
            ...state,
            loading: false,
            loaded: true,
            entities,
         };
      }

      case fromActions.LOAD_PIZZAS_FAIL: {
         return {
            ...state,
            loading: false,
            loaded: false,
         };
      }

      case fromActions.CREATE_PIZZA_SUCCESS: {
         const pizza = action.payload;
         const entities = {
            ...state.entities,
            [pizza.id]: pizza,
         };

         return {
            ...state,
            entities,
         };
      }

      default: return state;
   }
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
