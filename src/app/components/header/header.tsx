import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.scss';

import { auth0Client } from '../../../auth/auth';

type Props = { checkingSession: boolean, isAuthenticated: boolean };

export const Header = ({ checkingSession, isAuthenticated }: Props) => {
   const history = useHistory();
   // let isAuthenticated = false;
   // const [isAuthenticated, setIsAuthenticated] = useState(false);
   // isAuthenticated = auth0Client.isAuthenticated();

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
         <div>
            {
               !isAuthenticated &&
               <div className='app__menu'>
                  <div
                     onClick={auth0Client.signIn}
                     className='app__menu__menu-link'
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
                     className='app__menu__menu-link'
                  >
                     Sign Out
                  </div>
               </div>
            }
            <Link to={`/products`}>
               <img alt='' src={process.env.PUBLIC_URL + '/img/logo.svg'} className='app__logo' />
            </Link>
         </div>
         {/* <div className='app__corner'>
            <img alt='' src={process.env.PUBLIC_URL + '/img/logo.svg'} className='app__logo' />
         </div> */}
      </div>
   );
};