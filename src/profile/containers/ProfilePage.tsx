import React from 'react';
import { Divider } from 'antd';

import EssayMetaData from '../../essays/containers/EssayMetaData';
import { EssayListContainer } from '../../essays/containers/essay_list_container';

export class ProfilePage extends React.Component {

   render() {
      return (
         <>
            <Divider orientation='left' plain={true}>
               Essay List
            </Divider>
            <div>
               <EssayListContainer />
            </div>
            <Divider plain={true}>
               Add essay
            </Divider>
            <div>
               <EssayMetaData />
            </div>
         </>
      );
   }
}