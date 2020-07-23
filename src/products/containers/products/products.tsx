import React from 'react';
import './products.scss';
import { Pizza } from '../../models/pizza';
import { PizzaItem } from '../../components/pizza-item/pizza-item';

export const Products = () => {
   const pizzas: Pizza[] = [];

   return (
      <div className='products'>
         <div className='products__new'>
            <a
               className='btn btn__ok'
               href='/products/new'>
               New Pizza
            </a>
         </div>
         <div className='products__list'>
            {
               pizzas.length === 0 &&
               <div>No pizzas, add one to get started.</div>
            }
            {pizzas.map(pizza => {
               return (
                  <PizzaItem key={pizza.id} pizza={pizza} />
               );
            })}
         </div>
      </div>
   );
};