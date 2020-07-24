import React, { useEffect } from 'react';
import './products.scss';
import { Pizza } from '../../models/pizza';
import { PizzaItem } from '../../components/pizza-item/pizza-item';
import { PizzaToppings } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllToppings } from '../../store/selectors/toppings-selectors';
import { loadToppings, loadPizzas } from '../../store/epics';
import { getAllPizzas } from '../../store/selectors/pizzas-selectors';

export const Products = () => {

   const dispatch = useDispatch();
   const pizzas = useSelector(getAllPizzas);

   useEffect(() => {
      dispatch(loadPizzas());

      console.log('PIZZAS:', pizzas);
   }, [dispatch]);

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