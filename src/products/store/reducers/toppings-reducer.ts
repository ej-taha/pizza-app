import * as fromActions from '../actions/toppings-actions';
import { Topping } from '../../models/topping';

export interface ToppingsState {
   entities: { [id: string]: Topping };
   loaded: boolean;
   loading: boolean;
   selectedToppings: string[];
}

export const initialState: ToppingsState = {
   entities: {},
   loaded: false,
   loading: false,
   selectedToppings: []
};

export default function reducer(state = initialState, action: fromActions.ToppingsAction): ToppingsState {
   switch (action.type) {
      case fromActions.VISUALISE_TOPPINGS: {
         const selectedToppings = action.payload;

         return {
            ...state,
            selectedToppings,
         };
      }

      case fromActions.LOAD_TOPPINGS: {
         return {
            ...state,
            loading: true,
         };
      }

      case fromActions.LOAD_TOPPINGS_SUCCESS: {
         const toppings = action.payload;

         const entities = toppings.reduce(
            (entities: { [id: string]: Topping }, topping: Topping) => {
               return {
                  ...entities,
                  [topping._id]: topping,
               };
            },
            {
               ...state.entities,
            }
         );

         return {
            ...state,
            loaded: true,
            loading: false,
            entities,
         };
      }

      case fromActions.LOAD_TOPPINGS_FAIL: {
         return {
            ...state,
            loading: false,
            loaded: false,
         };
      }

      default: return state;
   }
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;