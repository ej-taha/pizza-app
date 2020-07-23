import * as fromTypes from '../actions/types';
import { EssayIteration } from '../../models/EssayIteration';

export interface EssayIterationState {
   entities: { [id: string]: EssayIteration };
   loaded: boolean;
   loading: boolean;
   selectedIteration: EssayIteration;
}

export const initialState: EssayIterationState = {
   entities: {},
   loaded: false,
   loading: false,
   selectedIteration: {} as EssayIteration
};

export default function reducer(state = initialState, action: fromTypes.EssayIterationActionTypes): EssayIterationState {
   switch (action.type) {
      case fromTypes.LOAD_ESSAY_ITERATIONS: {
         return {
            ...state,
            loading: true,
         };
      }

      case fromTypes.LOAD_ESSAY_ITERATIONS_SUCCESS: {
         const iterations = action.payload;

         const entities = iterations.reduce(
            (entities: { [id: string]: EssayIteration }, iteration: EssayIteration) => {
               return {
                  ...entities,
                  [iteration._id]: iteration,
               };
            },
            {
               ...state.entities,
            }
         );

         return {
            ...state,
            loading: false,
            loaded: true,
            entities,
         };
      }

      case fromTypes.LOAD_ESSAY_ITERATIONS_FAIL: {
         return {
            ...state,
            loading: false,
            loaded: false,
         };
      }

      case fromTypes.ITERATION_TO_CORRECT: {
         // const selectedIteration = Object.keys(state.entities).some(id => id === action.payload);

         const { [action.payload._id]: selectedIteration } = state.entities;
         console.log('selected iteration', selectedIteration);

         return {
            ...state,
            selectedIteration,
         };
      }

      case fromTypes.CREATE_ESSAY_ITERATIONS_SUCCESS: {
         const iteration = action.payload;
         const entities = {
            ...state.entities,
            [iteration._id]: iteration,
         };

         return {
            ...state,
            entities,
         };
      }

      default: return state;
   }
}

export const getPizzasEntities = (state: EssayIterationState) => state.entities;
export const getPizzasLoading = (state: EssayIterationState) => state.loading;
export const getPizzasLoaded = (state: EssayIterationState) => state.loaded;
export const getSelectedIteration = (state: EssayIterationState) => state.selectedIteration;