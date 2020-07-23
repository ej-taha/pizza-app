import { Action } from 'redux';
import { Pizza } from '../../models/pizza';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

class LoadPizzas implements Action {
   type: typeof LOAD_PIZZAS;
}

class LoadPizzasFail implements Action {
   type: typeof LOAD_PIZZAS_FAIL;
   payload: any;
}

class LoadPizzasSuccess implements Action {
   type: typeof LOAD_PIZZAS_SUCCESS;
   payload: Pizza[];
}

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

class CreatePizza implements Action {
   type: typeof CREATE_PIZZA;
   payload: Pizza;
}

class CreatePizzaFail implements Action {
   type: typeof CREATE_PIZZA_FAIL;
   payload: any;
}

class CreatePizzaSuccess implements Action {
   type: typeof CREATE_PIZZA_SUCCESS;
   payload: Pizza;
}

// update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

class UpdatePizza implements Action {
   readonly type: typeof UPDATE_PIZZA;
   payload: Pizza;
}

class UpdatePizzaFail implements Action {
   readonly type: typeof UPDATE_PIZZA_FAIL;
   payload: any;
}

class UpdatePizzaSuccess implements Action {
   readonly type: typeof UPDATE_PIZZA_SUCCESS;
   payload: Pizza;
}

// remove pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fail';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';

class RemovePizza implements Action {
   readonly type: typeof REMOVE_PIZZA;
   payload: Pizza;
}

class RemovePizzaFail implements Action {
   readonly type: typeof REMOVE_PIZZA_FAIL;
   payload: any;
}

class RemovePizzaSuccess implements Action {
   readonly type: typeof REMOVE_PIZZA_SUCCESS;
   payload: Pizza;
}

// action types
export type PizzasAction =
   | LoadPizzas
   | LoadPizzasFail
   | LoadPizzasSuccess
   | CreatePizza
   | CreatePizzaFail
   | CreatePizzaSuccess
   | UpdatePizza
   | UpdatePizzaFail
   | UpdatePizzaSuccess
   | RemovePizza
   | RemovePizzaFail
   | RemovePizzaSuccess;