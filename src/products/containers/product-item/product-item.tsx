import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-item.scss';

import * as fromStore from '../../store';
import { Pizza } from '../../models/pizza';
import { PizzaForm, PizzaDisplay } from '../../components';
import { Topping } from '../../models/topping';


export const ProductItem = () => {
   const dispatch = useDispatch();

   const pizza = useSelector(fromStore.getSelectedPizza);
   const toppings = useSelector(fromStore.getAllToppings);
   const visualise = useSelector(fromStore.getPizzaVisualised);

   const onSelect = (event: string[]) => {
      dispatch(new fromStore.VisualiseToppings(event));
   };

   const onCreate = (event: Pizza) => {
      dispatch(new fromStore.CreatePizza(event));
   };

   const onUpdate = (event: Pizza) => {
      dispatch(new fromStore.UpdatePizza(event));
   };

   const onRemove = (event: Pizza) => {
      const remove = window.confirm('Are you sure?');
      if (remove) {
         dispatch(new fromStore.RemovePizza(event));
      }
   };

   useEffect(() => {
      const pizzaExists = !!(pizza && pizza.toppings);
      const mappedToppings = pizzaExists
         ? pizza.toppings.map((topping: Topping) => topping._id)
         : [];
      dispatch(new fromStore.VisualiseToppings(mappedToppings));

   }, [dispatch]);

   console.log('[PRODUCT ITEM] PIZZA', pizza);
   console.log('[PRODUCT ITEM] TOPPINGS', toppings);
   console.log('[PRODUCT ITEM] VISUALISE', visualise);

   return (
      <div className='product-item'>
         <PizzaForm
            pizza={visualise}
            toppings={toppings}
            selected={onSelect}
            create={onCreate}
            update={onUpdate}
            remove={onRemove}
         >
            <PizzaDisplay pizza={visualise} />
         </PizzaForm>
      </div>
   );
};