import React from 'react';
import './pizza-display.scss';
import { Pizza } from '../../models/pizza';

type Props = { pizza: Pizza };

export const PizzaDisplay = ({ pizza }: Props) => {
   let x = 0;
   return (
      <div className='pizza-display'>
         <div className='pizza-display__base'>
            <img src={process.env.PUBLIC_URL + '/img/pizza.svg'} />
            {pizza.toppings.map(topping => {
               return (
                  <img key={topping.id}
                     src={process.env.PUBLIC_URL + '/img/toppings/' + topping.name + '.svg'}
                     style={{ zIndex: x++ }}
                     className='pizza-display__topping'
                  />);
            })}
         </div>
      </div>
   );
};