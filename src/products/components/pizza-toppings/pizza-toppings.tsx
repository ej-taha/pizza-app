import React from 'react';
import './pizza-toppings.scss';
import { Topping } from '../../models/topping';

type Props = { toppings: Topping[], selectedToppings: Topping[], selected };

export const PizzaToppings = ({ toppings, selectedToppings, selected }: Props) => {
   // const [value, setValue] = useState(selectedToppings);
   console.log('bloody selected toppings:', selectedToppings);

   const selectTopping = (topping: Topping) => {
      let foo = selectedToppings;
      if (existsInToppings(topping)) {
         foo = foo.filter((item: Topping) => item._id !== topping._id);
      } else {
         foo = [...foo, topping];
      }
      console.log('toppings: ', foo);

      const updatedToppings = foo.map((topping: Topping) => topping._id);
      selected(updatedToppings);
   };

   const existsInToppings = (topping: Topping) => {
      return selectedToppings.some(item => item._id === topping._id);
   };

   return (
      <div className='pizza-toppings'>
         {toppings.map(topping => {
            return (
               <div
                  key={topping._id}
                  className={`pizza-toppings-item ${existsInToppings(topping) ? 'active' : ''}`}
                  onClick={() => selectTopping(topping)}
               >
                  <img alt='' src={process.env.PUBLIC_URL + '/img/toppings/singles/' + topping.name + '.svg'} />
                  {topping.name}
               </div>
            );
         })}

      </div >
   );
};