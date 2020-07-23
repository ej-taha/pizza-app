import React from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import './header.scss';

function Header(props: RouteComponentProps) {
   return (
      <div className='app__header'>
         <img src={process.env.PUBLIC_URL + '/img/logo.svg'} className='app__logo' />
      </div>
   );
}

export default withRouter(Header);