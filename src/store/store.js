import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk.js';

import cartReducer from './cartReducer.js';
import categoriesReducer from './categoriesReducer.js';
import productsReducer from './productsReducer.js';

let reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();

// export default createStore(reducers);
