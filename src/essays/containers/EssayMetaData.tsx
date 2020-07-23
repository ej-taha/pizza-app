import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';

import { auth0Client } from '../../auth/Auth';

class EssayMetaData extends React.Component<RouteComponentProps, {}> {
   submit = async () => {
      const user = auth0Client.getProfile();
      const body = { userId: user.sub };

      console.log('body', body);

      const res = await axios.post('http://localhost:8081/api/essays', body, {
         headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
      });

      console.log(res);

      this.props.history.push('/');
   }

   render() {
      return (
         <div>
            <Button onClick={this.submit}>
               Add Essay Ticket
            </Button>
         </div>
      );
   }
}

export default withRouter(EssayMetaData);