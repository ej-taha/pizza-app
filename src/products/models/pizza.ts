import { Topping } from '../models/topping';

export interface Pizza {
   _id?: string;
   name?: string;
   toppings?: Topping[];
}