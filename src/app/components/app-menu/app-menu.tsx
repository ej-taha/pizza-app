import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './app-menu.scss';

type ActiveElementInMenu = { products: boolean };

export const AppMenu = () => {
   const [activeMenu, setActiveMenu] = useState<ActiveElementInMenu>({ products: true });

   const changeActiveMenu = (menu: string) => {
      switch (menu) {
         case 'products':
            setActiveMenu({ products: true });
            break;
         default:
            break;
      }
   };

   return (
      <div className='app__menu'>
         <Link
            onClick={() => changeActiveMenu('products')}
            className={`app__menu__link ${activeMenu.products ? 'active' : ''}`}
            to={`/products`}
         >
            Products
         </Link>
      </div>
   );
};