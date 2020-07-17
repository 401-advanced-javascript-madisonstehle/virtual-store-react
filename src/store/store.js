import { createStore, combineReducers } from 'redux';

import cartReducer from './cartReducer.js';
import categoriesReducer from './categoriesReducer.js';
import productsReducer from './productsReducer.js';

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(reducers);
