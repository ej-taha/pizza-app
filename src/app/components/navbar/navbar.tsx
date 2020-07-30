import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

type ActiveElementInNavbar = { products: boolean };

export const Navbar = () => {
   const [activeMenu, setActiveMenu] = useState<ActiveElementInNavbar>({ products: true });

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
      <div className='app__nav'>
         <Link
            onClick={() => changeActiveMenu('products')}
            className={`app__nav__link ${activeMenu.products ? 'active' : ''}`}
            to={`/products`}
         >
            Products
         </Link>
      </div>
   );
};