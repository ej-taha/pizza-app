import React from 'react';
import axios from 'axios';
import { Essay } from '../models/Essay';
import { EssayList } from '../components/essay_list';

const initialState = { essays: [] as Essay[] };
type State = Readonly<typeof initialState>;

export class EssayListContainer extends React.Component<{}, State> {
   readonly state = initialState;

   async componentDidMount() {
      const essays = (await axios.get('http://localhost:8081/api/essays')).data;

      this.setState({ essays });

      console.log(essays);
   }
   render() {
      return (
         <>
            <EssayList essays={this.state.essays} />
         </>
      );
   }
}