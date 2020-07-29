import React from 'react';
import { Transition } from 'react-spring/renderprops';
import './pizza-display.scss';

import { Pizza } from '../../models/pizza';

type Props = { pizza: Pizza };

export const PizzaDisplay = ({ pizza }: Props) => {
   let x = 0;
   return (
      <div className='pizza-display'>
         <div className='pizza-display__base'>
            <img alt='' src={process.env.PUBLIC_URL + '/img/pizza.svg'} />
            {pizza.toppings.map(topping => {
               return (
                  <Transition key={topping._id}
                     items={topping}
                     from={{ opacity: 0 }}
                     enter={{ opacity: 1 }}
                     leave={{ opacity: 0 }}>
                     {topping => topping && (props =>
                        <div style={props}>
                           <img alt=''
                              src={process.env.PUBLIC_URL + '/img/toppings/' + topping.name + '.svg'}
                              style={{ zIndex: x++ }}
                              className='pizza-display__topping'
                           />
                        </div>
                     )}
                  </Transition>
               );
            })}
         </div>
      </div>
   );
};