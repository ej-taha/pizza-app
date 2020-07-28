import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
   return (
      <div className='app__nav'>
         <Link className='app__nav__link' to={`/products/new`}>
            Products
         </Link>
      </div>
   );
};