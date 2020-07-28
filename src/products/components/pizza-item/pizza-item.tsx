import React from 'react';
import { Link } from 'react-router-dom';
import './pizza-item.scss';
import { Pizza } from '../../models/pizza';
import { PizzaDisplay } from '../pizza-display/pizza-display';

type Props = { pizza: Pizza };

export const PizzaItem = ({ pizza }: Props) => {
   return (
      <div className='pizza-item'>
         <Link to={`/products/${pizza._id}`}>
            <PizzaDisplay pizza={pizza} />
            <h4>{pizza.name}</h4>
            <button type='button' className='btn btn__ok'>
               View Pizza
            </button>
         </Link>
      </div>
   );
};