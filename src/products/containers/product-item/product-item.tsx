import React, { useEffect } from 'react';
import './product-item.scss';

import * as fromStore from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Pizza } from '../../models/pizza';

export const ProductItem = () => {
   const dispatch = useDispatch();
   let pizza$: Pizza;

   useEffect(() => {

   }, [dispatch]);

   return (
      <></>
   );
};