import { fetchPizzasEpic } from './pizzas-epics';
import { fetchToppingsEpic } from './toppings-epics';

export const epics = [
   fetchPizzasEpic,
   fetchToppingsEpic
];

export * from './pizzas-epics';
export * from './toppings-epics';