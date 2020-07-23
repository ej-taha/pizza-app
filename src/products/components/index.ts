import { PizzaItem } from './pizza-item/pizza-item';
import { PizzaForm } from './pizza-form/pizza-form';
import { PizzaDisplay } from './pizza-display/pizza-display';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';

export const components: any[] = [
   PizzaItem,
   PizzaForm,
   PizzaDisplay,
   PizzaToppings,
];

export * from './pizza-item/pizza-item';
export * from './pizza-form/pizza-form';
export * from './pizza-display/pizza-display';
export * from './pizza-toppings/pizza-toppings';