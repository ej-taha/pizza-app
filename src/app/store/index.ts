import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { productsEpic } from '../../products/store/reducers';
import rootReducer from './reducers';
import { PizzasService, ToppingsService } from '../../products/services';
import { loadState, saveState } from './local-storage';
import throttle from 'lodash.throttle';
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
         loadState(),
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

      store.subscribe(throttle(() => {
         saveState({
            router: store.getState().router,
            products: store.getState().products
         });
      }, 1000));

      return store;
   }
}