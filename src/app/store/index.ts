import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { productsEpic } from '../../products/store/reducers';
import rootReducer from './reducers';
import { PizzasService, ToppingsService } from '../../products/services';

export const history = createBrowserHistory();

export class StoreConfig {
   constructor(private pizzasService: PizzasService, private toppingsService: ToppingsService) { }

   getEpicMiddleware = () => {
      return createEpicMiddleware({
         dependencies: {
            pizzasService: this.pizzasService,
            toppingsService: this.toppingsService
         }
      });
   }

   getCustomMiddleware = () => {
      return store => next => action => {
         next({ ...action });
      };
   }

   public configureStore() {
      const epicMiddleware = this.getEpicMiddleware();
      const store = createStore(
         rootReducer(history),
         compose(
            applyMiddleware(
               routerMiddleware(history), // for dispatching history actions
               this.getCustomMiddleware(),
               epicMiddleware,
               logger
            ),
         ),
      );

      epicMiddleware.run(productsEpic);

      return store;
   }
}