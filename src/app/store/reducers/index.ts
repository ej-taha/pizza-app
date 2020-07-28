import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { productsReducer } from '../../../products/store/reducers';

const rootReducer = (history) => combineReducers({
   router: connectRouter(history),
   products: productsReducer
});


export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;