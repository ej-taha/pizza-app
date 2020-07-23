import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { ajax } from 'rxjs/ajax';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './reducers';

const epicMiddleware = createEpicMiddleware({ dependencies: { getJSON: ajax.getJSON, post: ajax.post } });

export function configureStore() {
   const store = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware, logger)
   );

   epicMiddleware.run(rootEpic);

   return store;
}

/*export const store = createStore(
   rootReducer,
   applyMiddleware(thunk, logger)
   // window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);*/