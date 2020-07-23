import React from 'react';
import { Button } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';


type RouteInfo = { essayId: string };

class EssayItem extends React.Component<RouteComponentProps<RouteInfo>> {
   componentDidMount() {
      const { match: { params } } = this.props;

      console.log(params.essayId);
   }

   foo() {

   }

   render() {
      return (
         <>
            <Button onClick={this.foo}>
               trigger
            </Button>
         </>
      );
   }
}

export default withRouter(EssayItem);