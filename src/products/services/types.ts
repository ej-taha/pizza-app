import { PizzasService } from './pizzas-service';

export interface Service {
   getPizzas();
}


let TYPES = {
   Service: PizzasService
};

export default TYPES;