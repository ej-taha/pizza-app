import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { auth0Client } from '../../auth/Auth';
import { EssayIteration } from '../models/EssayIteration';
import { EssayForm } from '../components/EssayForm';
import { useDispatch } from 'react-redux';
import { createEssayIteration } from '../store/actions';

// const initialState = {};
// type State = Readonly<typeof initialState>;

const EssaySubmissionPage = (props: RouteComponentProps) => {
   // readonly state: State = initialState;
   const dispatch = useDispatch();

   const submit = async (value: any) => {
      const essay: EssayIteration = {
         essayId: '1',
         content: value.text,
         correction: null,
         submissionDate: new Date(),
         isCorrection: false,
         iteration: 0
      };

      //dispatch(createEssayIteration(essay));

      console.log(essay);

      /* await axios.post(`http://localhost:8081/api/iterations/`, essay, {
         headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
      });
      */
      props.history.push('/');
   };

   return (
      <EssayForm submitEssay={this.submit} />
   );
};

export default withRouter(EssaySubmissionPage);