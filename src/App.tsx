import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.scss';

import Header from './header/header';
import { configureStore, history } from './store';
import { PizzaDisplay } from './products/components/pizza-display/pizza-display';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { ProductItem } from './products/containers/product-item/product-item';
import { Products } from './products/containers/products/products';
import { PizzaToppings } from './products/components';


class App extends React.Component {

   render() {
      return (
         <Provider store={configureStore()}>
            <div className='app'>
               <Header />
               <div className='app__content'>
                  <Navbar />
                  <div className='app__container'>
                     {/* <PizzaToppings toppings={this.state.pizzas} /> */}
                     <ConnectedRouter history={history}>
                        <Switch>
                           <Route exact={true} path='/' component={Products} />
                           <Route key='new-pizza' exact={true} path='/products/new' component={ProductItem} />
                           <Route key='pizza-item' exact={true} path='/products/:pizzaId' component={ProductItem} />
                        </Switch>
                     </ConnectedRouter>
                  </div>
                  <Footer />
               </div>
               {/* <Route exact={true} path='/pizza' component={PizzaDisplay} />
               <Route exact={true} path='/profile' component={ProfilePage} />
               <Route exact={true} path='/essays/:essayId' component={EssayDetailsContainer} /> */}
            </div>
         </Provider>

      );
   }
}

export default App;