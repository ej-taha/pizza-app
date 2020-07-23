import axios from 'axios';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as fromTypes from './types';
import { EssayIteration } from '../../models/EssayIteration';
import { of } from 'rxjs';

export const fetchEssayIterationsEpic = (action$, state$, { getJSON }) => {
   return action$.pipe(
      ofType(fromTypes.LOAD_ESSAY_ITERATIONS),
      mergeMap(() =>
         getJSON('http://localhost:8081/api/iterations').pipe(
            map((response: EssayIteration[]) => loadEssayIterationsSuccess(response))
         )
      )
   );
};

export const createEssayIterationEpic = (action$, state$, { post }) => {
   console.log('bloody here');
   return action$.pipe(
      ofType(fromTypes.CREATE_ESSAY_ITERATIONS),
      mergeMap((action: any) =>
         post('http://localhost:8081/api/iterations/', action.payload, {
            headers: { 'Content-Type': 'application/json' }
         }
         ).pipe(
            map(({ response }) => createEssayIterationSuccess(response.created)),
            catchError(error => {
               console.log('error: ', error);
               return of(error);
            })
         )
      )
   );
};

/* export const createEssayIterationEpic = (action$, state$, { post }) => {
   console.log('action', action$);
   return action$.pipe(
      ofType(fromTypes.CREATE_ESSAY_ITERATIONS),
      mergeMap((payload: EssayIteration) =>
         post(
            'http://localhost:8081/api/iterations',
            payload
         ).pipe(
            map(response => console.log('response: ', response)),
            catchError(error => {
               console.log('error: ', error);
               return of(error);
            })
         )
      )
   );
}; */

/* export const createEssayIterationEpic = (action$, state$, { ajax }) => {
   return action$.pipe(
      ofType(fromTypes.CREATE_ESSAY_ITERATIONS),
      mergeMap((payload: EssayIteration) =>
         ajax({ url: `http://localhost:8081/api/iterations`, method: 'POST', body: payload }).pipe(
            map((response: { created: EssayIteration, error: boolean }) => { console.log('response', response); createEssayIterationSuccess(response.created); })
         )
      )
   );
}; */

/* export function fetchEssayIterations() {
   return function action(dispatch) {
      console.log('here');
      dispatch(loadEssayIterations());

      const request = axios.get('http://localhost:8081/api/iterations');

      return request.then(
         ({ data }: any) => dispatch(loadEssayIterationsSuccess(data)),
         error => dispatch(loadEssayIterationsFail(error))
      );
   };
} */

export function loadEssayIterations(): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.LOAD_ESSAY_ITERATIONS
   };
}

export function loadEssayIterationsSuccess(payload: EssayIteration[]): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.LOAD_ESSAY_ITERATIONS_SUCCESS,
      payload
   };
}

export function loadEssayIterationsFail(error: any): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.LOAD_ESSAY_ITERATIONS_FAIL,
      payload: error
   };
}

export function designateIterationForCorrection(payload: EssayIteration): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.ITERATION_TO_CORRECT,
      payload
   };
}

export const createEssayIteration = (payload: EssayIteration) => {
   return {
      type: fromTypes.CREATE_ESSAY_ITERATIONS,
      payload
   };
};

export function createEssayIterationSuccess(payload: EssayIteration): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.CREATE_ESSAY_ITERATIONS_SUCCESS,
      payload
   };
}

export function createEssayIterationFail(error: any): fromTypes.EssayIterationActionTypes {
   return {
      type: fromTypes.CREATE_ESSAY_ITERATIONS_FAIL,
      payload: error
   };
}