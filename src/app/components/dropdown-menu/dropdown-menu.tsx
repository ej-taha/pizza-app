import React from 'react';
import './dropdown-menu.scss';
import { ReactComponent as CogIcon } from '../../../icons/cog.svg';
import { ReactComponent as LogoutIcon } from '../../../icons/logout.svg';

import { auth0Client } from '../../../auth/auth';
import { DropdownItem } from '../dropdown-item/dropdown-item';
import { useHistory } from 'react-router';

type Props = { isAuthenticated: boolean };

export const DropdownMenu = ({ isAuthenticated }: Props) => {
   const history = useHistory();
   const user = auth0Client.getProfile();
   //console.log('USER', user);
   let picture = '';
   if (user) {
      picture = user.picture;
      console.log(picture);
   }

   const signOut = () => {
      auth0Client.signOut();
      history.replace('/');
   };

   return (
      <div className='dropdown'>
         {
            isAuthenticated &&
            <DropdownItem
               leftIcon={<img alt='Avatar' src={picture} />}
               rightIcon={null}
            >
               &nbsp;My Profile
            </DropdownItem>
         }
         {isAuthenticated &&
            <div onClick={() => { signOut(); }}>
               <DropdownItem
                  leftIcon={<LogoutIcon />}
                  rightIcon={null}
               >
                  &nbsp;Sign Out
               </DropdownItem>
            </div>
         }
         {
            !isAuthenticated &&
            <div onClick={auth0Client.signIn}>
               <DropdownItem
                  leftIcon={null}
                  rightIcon={null}
               >
                  Sign In
                  </DropdownItem>
            </div>
         }
      </div>
   );
};
