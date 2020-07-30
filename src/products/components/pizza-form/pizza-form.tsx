import React, { FunctionComponent, useState, useEffect } from 'react';
import './pizza-form.scss';

import { Topping } from '../../models/topping';
import { Pizza } from '../../models/pizza';
import { PizzaToppings } from '../pizza-toppings/pizza-toppings';

type Props = {
   pizza: Pizza,
   toppings: Topping[],
   selected: (selectedToppings: string[]) => void,
   create: (pizza: Pizza) => void,
   update: (pizza: Pizza) => void,
   remove: (pizza: Pizza) => void
};

export const PizzaForm: FunctionComponent<Props> = ({ pizza, toppings, selected, create, update, remove, children }) => {
   const [exists, setExists] = useState(false);
   const [name, setName] = useState(pizza.name);

   const createPizza = () => {
      const pizzaToCreate = { ...pizza, name };
      console.log('FOO', pizzaToCreate);
      create(pizzaToCreate);
   };

   const updatePizza = () => {
      const pizzaToUpdate = { ...pizza, name };
      console.log('FOO', pizzaToUpdate);
      update(pizzaToUpdate);
   };

   const removePizza = () => {
      const pizzaToUpdate = { ...pizza, name };
      console.log('FOO', pizzaToUpdate);
      remove(pizzaToUpdate);
   };

   const checkIfPizzaExists = () => {
      console.log('CHECK PIZZA', pizza);
      if (pizza && pizza._id) {
         console.log('BLOODY TRUUUUUE');
         setExists(true);
      }
   };

   const handleNameChange = (e) => {
      setName(e.target.value);
   };

   useEffect(() => {
      checkIfPizzaExists();
   });

   console.log('TOPPINGS IN PIZZA FORM', toppings);
   console.log('EXISTS', exists);

   return (
      <div className='pizza-form'>
         <form>
            <label>
               <h4>Pizza name</h4>
               <input
                  type='text'
                  placeholder='e.g. Pepperoni'
                  className='pizza-form__input'
                  value={name}
                  onChange={(e) => handleNameChange(e)}
               />
            </label>
            <hr />

            {children}

            <label>
               <h4>Select toppings</h4>
            </label>
            <div className='pizza-form__list'>
               <PizzaToppings toppings={toppings} selectedToppings={pizza.toppings} selected={selected} />
            </div>
            <div className='pizza-form__actions'>
               {
                  !exists &&
                  <button
                     type='button'
                     className='btn btn__ok'
                     onClick={() => createPizza()}
                  >
                     Create Pizza
                  </button>
               }
               {
                  exists &&
                  <button
                     type='button'
                     className='btn btn__ok'
                     onClick={() => updatePizza()}
                  >
                     Save changes
                  </button>
               }
               {
                  exists &&
                  <button
                     type='button'
                     className='btn btn__warning'
                     onClick={() => removePizza()}
                  >
                     Delete Pizza
                  </button>
               }
            </div>
         </form>
      </div>
   );
};