import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'reflect-metadata';
import { container } from 'tsyringe';
import './App.scss';

import * as fromAuth from './auth';
import * as appComponents from './app/components';
import * as productsComponents from './products/containers';
import { history, StoreConfig } from './app/store';
import { PizzasService } from './products/services/pizzas-service';
import { ToppingsService } from './products/services';

const pizzasService = container.resolve(PizzasService);
const toppingssService = container.resolve(ToppingsService);
const store = (new StoreConfig(pizzasService, toppingssService)).configureStore();



const App = () => {
   const location = useLocation();
   const [checkingSession, setCheckingSession] = useState(true);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
      console.log('SHITTY LOCATION', location);

      const checkSession = async () => {
         if (location.pathname === '/callback') {
            setCheckingSession(false);
            setIsAuthenticated(true);
            return;
         }
         try {
            await fromAuth.auth0Client.silentAuth();
            setIsAuthenticated(true);
         } catch (err) {
            if (err.error !== 'login_required')
               console.log(err.error);
         }
         setCheckingSession(false);
      };

      checkSession();
   }, [location, checkingSession]);

   return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
            <div className='app'>
               <appComponents.Header checkingSession={checkingSession} isAuthenticated={isAuthenticated} />
               <div className='app__content'>
                  <appComponents.Navbar />
                  <div className='app__container'>
                     <Switch>
                        <Route exact={true} path='/products' component={productsComponents.Products} />
                        <Route key='new-pizza' exact={true} path='/products/new' component={productsComponents.ProductItem} />
                        <Route key='pizza-item' exact={true} path='/products/:pizzaId' component={productsComponents.ProductItem} />
                        <Route exact={true} path='/callback' component={fromAuth.Callback} />
                        <Route key='home' exact={true} path='/' component={productsComponents.Products} />
                     </Switch>
                  </div>
                  <appComponents.Footer />
               </div>
            </div>
         </ConnectedRouter>
      </Provider>
   );
};

export default App;