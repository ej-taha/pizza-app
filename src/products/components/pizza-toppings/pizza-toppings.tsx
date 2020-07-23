import React, { useState } from 'react';
import classNames from 'classnames';
import './pizza-toppings.scss';
import { Topping } from '../../models/topping';

type Props = { toppings: Topping[] };

export const PizzaToppings = ({ toppings }: Props) => {
   const [value, setValue] = useState(toppings);

   const selectTopping = (topping: Topping) => {
      if (existsInToppings(topping)) {
         setValue(value.filter(item => item.id !== topping.id));
      } else {
         setValue([...value, topping]);
      }
      console.log('toppings: ', value);
   };

   const existsInToppings = (topping: Topping) => {
      return value.some(val => val.id === topping.id);
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