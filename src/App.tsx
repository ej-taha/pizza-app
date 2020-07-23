import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';

import './App.scss';
import Header from './header/header';
import EssaySubmissionPage from './essays/containers/EssaySubmissionPage';
import EssayDetailsContainer from './essays/containers/essay_details_container';
import EssayItem from './essays/components/essay_item';
import * as fromAuth from './auth';
import { ProfilePage } from './profile/containers/ProfilePage';
import { configureStore } from './essays/store/store';
import { PizzaDisplay } from './products/components/pizza-display/pizza-display';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { ProductItem } from './products/containers/product-item/product-item';
import { Products } from './products/containers/products/products';

const initialState = { pizzas: [] };
type State = Readonly<typeof initialState>;

class App extends React.Component<RouteComponentProps, State> {
   readonly state: State = initialState;

   async componentDidMount() {
      const pizzas = (await axios.get('http://localhost:5000/pizzas')).data;
      this.setState({ pizzas });
   }

   render() {
      if (this.state.pizzas.length === 0) {
         return <div />;
      }
      console.log('fooking pizzas:', this.state.pizzas);
      return (
         <Provider store={configureStore()}>
            <div className='app'>
               <Header />
               <div className='app__content'>
                  <Navbar />
                  <div className='app__container'>
                     <Route exact={true} path='/' component={Products} />
                     <Route exact={true} path='/products/new' component={ProductItem} />
                     <Route exact={true} path='/products/:pizzaId' component={ProductItem} />
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

export default withRouter(App);