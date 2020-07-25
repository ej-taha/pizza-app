import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import './products.scss';

import { Pizza } from '../../models/pizza';
import { PizzaItem } from '../../components/pizza-item/pizza-item';
import { PizzaToppings } from '../../components';
import { getAllToppings } from '../../store/selectors/toppings-selectors';
import { getAllPizzas, getPizzaVisualised, getSelectedPizza } from '../../store/selectors/pizzas-selectors';
import { LoadPizzas, LoadToppings } from '../../store';

export const Products = () => {

   const dispatchPizzas = useDispatch();
   const dispatchToppings = useDispatch();
   const foo = useSelector(getPizzaVisualised);
   const bar = useSelector(getSelectedPizza);
   const pizzas = useSelector(getAllPizzas);

   useEffect(() => {
      dispatchPizzas(new LoadPizzas());
      dispatchToppings(new LoadToppings());

   }, [dispatchPizzas, dispatchToppings]);

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