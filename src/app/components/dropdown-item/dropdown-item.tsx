import React, { FunctionComponent } from 'react';
import './dropdown-item.scss';

type Props = { leftIcon: any, rightIcon: any };

export const DropdownItem: FunctionComponent<Props> = ({ leftIcon, rightIcon, children }) => {
   return (
      <a className='menu-item'>
         {leftIcon && <span className='icon-button'>{leftIcon}</span>}

         {children}

         <span className='icon-right'>{rightIcon}</span>
      </a>
   );
};
