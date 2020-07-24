import React from 'react';
import './pizza-form.scss';

import { Topping } from '../../models/topping';
import { Pizza } from '../../models/pizza';
import { PizzaToppings } from '../pizza-toppings/pizza-toppings';

type Props = { pizza: Pizza, toppings: Topping[] };

export const PizzaForm = ({ pizza, toppings }: Props) => {
   const exists = false;

   const createPizza = (pizza) => {

   };

   const updatePizza = (pizza) => {

   };

   const removePizza = (pizza) => {

   };

   return (
      <div className='pizza-form'>
         <form>
            <label>
               <h4>Pizza name</h4>
               <input
                  type='text'
                  placeholder='e.g. Pepperoni'
                  className='pizza-form__input'
               />
            </label>

            <label>
               <h4>Select toppings</h4>
            </label>
            <div className='pizza-form__list'>
               <PizzaToppings toppings={toppings} />
            </div>
            <div className='pizza-form__actions'>
               {
                  !exists &&
                  <button
                     type='button'
                     className='btn btn__ok'
                     onClick={() => createPizza({})}
                  >
                     Create Pizza
                  </button>
               }
               {
                  exists &&
                  <button
                     type='button'
                     className='btn btn__ok'
                     onClick={() => updatePizza({})}
                  >
                     Save changes
                  </button>
               }
               {
                  exists &&
                  <button
                     type='button'
                     className='btn btn__warning'
                     onClick={() => removePizza({})}
                  >
                     Save changes
                  </button>
               }
            </div>
         </form>
      </div>
   );
};