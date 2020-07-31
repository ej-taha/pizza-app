import React, { FunctionComponent, useState } from 'react';
import './navbar-item.scss';

type Props = { icon: any };

export const NavbarItem: FunctionComponent<Props> = ({ icon, children }) => {
   const [open, setOpen] = useState(false);
   return (
      <li className='nav-item'>
         <div className='icon-button' onClick={() => setOpen(!open)}>
            {icon}
         </div>
         {
            open && children
         }
      </li>
   );
};
