import { Topping } from '../models/topping';

export interface Pizza {
   id?: number;
   name?: string;
   toppings?: Topping[];
}