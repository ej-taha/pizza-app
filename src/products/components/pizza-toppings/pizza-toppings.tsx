import React, { useState } from 'react';
import classNames from 'classnames';
import './pizza-toppings.scss';
import { Topping } from '../../models/topping';

type Props = { toppings: Topping[], selectedToppings: Topping[], selected };

export const PizzaToppings = ({ toppings, selectedToppings, selected }: Props) => {
   // const [value, setValue] = useState(selectedToppings);
   console.log('bloody selected toppings:', selectedToppings);

   const selectTopping = (topping: Topping) => {
      let foo = selectedToppings;
      if (existsInToppings(topping)) {
         foo = foo.filter(item => item.id !== topping.id);
      } else {
         foo = [...foo, topping];
      }
      console.log('toppings: ', foo);

      const updatedToppings = foo.map(topping => topping.id);
      selected(updatedToppings);
   };

   const existsInToppings = (topping: Topping) => {
      return selectedToppings.some(val => val.id === topping.id);
   };

   return (
      <div className='pizza-toppings'>
         {toppings.map(topping => {
            return (
               <div
                  key={topping.id}
                  className={`pizza-toppings-item ${existsInToppings(topping) ? 'active' : ''}`}
                  onClick={() => selectTopping(topping)}
               >
                  <img src={process.env.PUBLIC_URL + '/img/toppings/singles/' + topping.name + '.svg'} />
                  {topping.name}
               </div>
            );
         })}

      </div >
   );
};