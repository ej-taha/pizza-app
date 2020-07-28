import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'reflect-metadata';
import { container } from 'tsyringe';
import './App.scss';


import * as appComponents from './app/components';
import * as productsComponents from './products/containers';
import { history, StoreConfig } from './app/store';
import { PizzasService } from './products/services/pizzas-service';
import { ToppingsService } from './products/services';

const pizzasService = container.resolve(PizzasService);
const toppingssService = container.resolve(ToppingsService);
const store = (new StoreConfig(pizzasService, toppingssService)).configureStore();

class App extends React.Component {

   render() {
      return (
         <Provider store={store}>
            <div className='app'>
               <appComponents.Header />
               <div className='app__content'>
                  <ConnectedRouter history={history}>
                     <appComponents.Navbar />
                     <div className='app__container'>
                        <Switch>
                           <Route exact={true} path='/products' component={productsComponents.Products} />
                           <Route key='new-pizza' exact={true} path='/products/new' component={productsComponents.ProductItem} />
                           <Route key='pizza-item' exact={true} path='/products/:pizzaId' component={productsComponents.ProductItem} />
                           <Route key='home' exact={true} path='/' component={productsComponents.Products} />
                        </Switch>
                     </div>
                     <appComponents.Footer />
                  </ConnectedRouter>
               </div>
            </div>
         </Provider>

      );
   }
}

export default App;