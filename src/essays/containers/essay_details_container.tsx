import React from 'react';
import axios from 'axios';
import { ajax } from 'rxjs/ajax';
import { Button } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EssayIteration } from '../models/EssayIteration';
import { EssayForm } from '../components/EssayForm';
import { auth0Client } from '../../auth/Auth';
import { useDispatch } from 'react-redux';
import { createEssayIteration } from '../store/actions';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const initialState = { essayIterations: [] as EssayIteration[] };
type State = Readonly<typeof initialState>;
type RouteInfo = { essayId: string };

const EssayDetailsContainer = (props: RouteComponentProps<RouteInfo>) => {
   const dispatch = useDispatch();
   /* componentDidMount = async () => {
      const { match: { params } } = this.props;

      const URI = `http://localhost:8081/api/essays/${params.essayId}/iterations`;
      const essayIterations = (await axios.get(URI)).data;

      this.setState({ essayIterations });

      console.log(essayIterations);
   } */

   const submitEssayIteration = async (values: any) => {
      const { match: { params } } = props;
      const essay: EssayIteration = {
         essayId: params.essayId,
         // content: values.text,
         content: '<div><p>fuck this shit</p></div>',
         correction: null,
         submissionDate: new Date(),
         isCorrection: false,
         iteration: 1
      };

      dispatch(createEssayIteration(essay));

      console.log(essay);

      /* await ajax({
         url: 'http://localhost:8081/api/iterations/',
         method: 'POST',
         headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` },
         body: essay
      }).pipe(
         map(response => console.log('response: ', response)),
         catchError(error => {
            console.log('error: ', error);
            return of(error);
         })
      );

      axios.post(`http://localhost:8081/api/iterations/`, essay, {
         headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
      }); */

      props.history.push('/');
   };

   return (
      <>
         <p>
            Add iteration
            </p>
         <EssayForm submitEssay={submitEssayIteration} />
      </>
   );
};

export default withRouter(EssayDetailsContainer);