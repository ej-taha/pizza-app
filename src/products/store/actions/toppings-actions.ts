import { Action } from 'redux';
import { Topping } from '../../models/topping';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

class LoadToppings implements Action {
   readonly type: typeof LOAD_TOPPINGS;
}

class LoadToppingsFail implements Action {
   readonly type: typeof LOAD_TOPPINGS_FAIL;
   payload: any;
}

class LoadToppingsSuccess implements Action {
   readonly type: typeof LOAD_TOPPINGS_SUCCESS;
   payload: Topping[];
}

class VisualiseToppings implements Action {
   readonly type: typeof VISUALISE_TOPPINGS;
   payload: number[];
}

// action types
export type ToppingsAction =
   | LoadToppings
   | LoadToppingsFail
   | LoadToppingsSuccess
   | VisualiseToppings;