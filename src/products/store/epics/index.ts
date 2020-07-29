import { fetchPizzasEpic, createPizzaEpic, createPizzaSuccessEpic, updatePizzaEpic, removePizzaEpic, handlePizzaSuccessEpic } from './pizzas-epics';
import { fetchToppingsEpic } from './toppings-epics';

export const epics = [
   fetchPizzasEpic,
   fetchToppingsEpic,
   createPizzaEpic,
   createPizzaSuccessEpic,
   updatePizzaEpic,
   removePizzaEpic,
   handlePizzaSuccessEpic
];

export * from './pizzas-epics';
export * from './toppings-epics';