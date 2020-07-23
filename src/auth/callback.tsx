import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { auth0Client } from './Auth';

class Callback extends Component<RouteComponentProps, {}> {
   async componentDidMount() {
      await auth0Client.handleAuthentication();
      this.props.history.replace('/');
   }

   render() {
      return (
         <p>Loading profile...</p>
      );
   }
}

export const CallbackRoute = withRouter(Callback);