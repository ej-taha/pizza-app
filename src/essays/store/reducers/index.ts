import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import essayIterations from './essay-iteration.reducer';
import * as fromActions from '../actions/essay-iterations.actions';

export const rootEpic = combineEpics(
   fromActions.fetchEssayIterationsEpic,
   fromActions.createEssayIterationEpic
);

export const rootReducer = combineReducers({
   essayIterations
});

export type RootState = ReturnType<typeof rootReducer>;