import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navbar.scss';
import { ReactComponent as CaretIcon } from '../../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../../icons/plus.svg';

import { auth0Client } from '../../../auth/auth';
import { NavbarItem } from '../navbar-item/navbar-item';
import { DropdownMenu } from '../dropdown-menu/dropdown-menu';

type Props = { checkingSession: boolean, isAuthenticated: boolean };

export const Navbar = ({ checkingSession, isAuthenticated }: Props) => {
   const history = useHistory();

   const signOut = () => {
      auth0Client.signOut();
      history.replace('/');
   };

   const user = auth0Client.getProfile();
   //console.log('USER', user);
   let picture = '';
   if (user) {
      picture = user.picture;
      console.log(picture);
   }

   console.log('CHECKING SESSION:', checkingSession);
   if (checkingSession)
      return <div />;

   return (
      <div className='app__header'>
         <nav className='app__navbar'>
            <ul className='app__navbar__item'>
               <NavbarItem icon={<CaretIcon />}>
                  <DropdownMenu isAuthenticated={isAuthenticated} />
               </NavbarItem>
            </ul>

         </nav>
         <Link to={`/products`}>
            <img alt='' src={process.env.PUBLIC_URL + '/img/logo.svg'} className='app__logo' />
         </Link>
      </div>

   );
   {/* <div className='app__header'>
         <div>
            {
               !isAuthenticated &&
               <div className='app__menu'>
                  <div
                     onClick={auth0Client.signIn}
                     className='app__menu__menu-item'
                  >
                     Sign In
                  </div>
               </div>
            }
            {
               isAuthenticated &&
               <div className='app__menu'>
                  <div
                     onClick={() => { signOut(); }}
                     className='app__menu__menu-item'
                  >
                     Sign Out
                  </div>
               </div>
            }
            
         </div>
      </div> */}
};