import React, { Component, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth0Client } from './auth';

export const Callback = () => {
   const history = useHistory();

   useEffect(() => {
      const handleAuthentication = async () => {
         await auth0Client.handleAuthentication();
         history.replace('/');
      };

      console.log('IN CALLBACK');

      handleAuthentication();
   }, [history]);

   return (
      <p>Loading profile...</p>
   );
};