import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { ajax } from 'rxjs/ajax';
import { createEpicMiddleware } from 'redux-observable';

import { productsReducer, productsEpic } from '../products/store/reducers';
import rootReducer from './reducers';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware({ dependencies: { getJSON: ajax.getJSON, post: ajax.post } });

export function configureStore() {
   const store = createStore(
      rootReducer(history),
      compose(
         applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            epicMiddleware,
            logger
         ),
      ),
   );

   epicMiddleware.run(productsEpic);

   return store;
}

/*export const store = createStore(
   rootReducer,
   applyMiddleware(thunk, logger)
   // window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);*/