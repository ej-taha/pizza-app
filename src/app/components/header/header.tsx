import React from 'react';
import './header.scss';

export const Header = () => {
   return (
      <div className='app__header'>
         <img alt='' src={process.env.PUBLIC_URL + '/img/logo.svg'} className='app__logo' />
      </div>
   );
};