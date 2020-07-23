import { Action } from 'redux';
import { EssayIteration } from '../../models/EssayIteration';

// load essay iterations
export const LOAD_ESSAY_ITERATIONS = '[Essay Iterations] Load Essays';
export const LOAD_ESSAY_ITERATIONS_FAIL = '[Essay Iterations] Load Essays Fail';
export const LOAD_ESSAY_ITERATIONS_SUCCESS = '[Essay Iterations] Load Essays Success';
export const ITERATION_TO_CORRECT = '[Essay Iterations] Iteration To Correct';

class LoadEssayIterations implements Action {
   type: typeof LOAD_ESSAY_ITERATIONS;
}

class LoadEssayIterationsFail implements Action {
   type: typeof LOAD_ESSAY_ITERATIONS_FAIL;
   payload: any;
}

class LoadEssayIterationsSuccess implements Action {
   type: typeof LOAD_ESSAY_ITERATIONS_SUCCESS;
   payload: EssayIteration[];
}

class IterationToCorrect implements Action {
   type: typeof ITERATION_TO_CORRECT;
   payload: EssayIteration;
}

// create essay iterations
export const CREATE_ESSAY_ITERATIONS = '[Essay Iterations] Create Essays';
export const CREATE_ESSAY_ITERATIONS_FAIL = '[Essay Iterations] Create Essays Fail';
export const CREATE_ESSAY_ITERATIONS_SUCCESS = '[Essay Iterations] Create Essays Success';

interface CreateEssayIteration {
   type: typeof CREATE_ESSAY_ITERATIONS;
   payload: EssayIteration;
}

interface CreateEssayIterationFail {
   type: typeof CREATE_ESSAY_ITERATIONS_FAIL;
   payload: any;
}

interface CreateEssayIterationSuccess {
   type: typeof CREATE_ESSAY_ITERATIONS_SUCCESS;
   payload: EssayIteration;
}

// action types
export type EssayIterationActionTypes =
   | CreateEssayIteration
   | LoadEssayIterationsFail
   | LoadEssayIterationsSuccess
   | LoadEssayIterations
   | CreateEssayIterationFail
   | CreateEssayIterationSuccess
   | IterationToCorrect;