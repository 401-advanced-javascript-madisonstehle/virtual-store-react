import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer.js';
import categoriesReducer from './categoriesReducer.js';
import productsReducer from './productsReducer.js';

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

// const reducer = ( state = initState, action ) => {
//   let newState = { ...state };

//   switch ( action.type ) {
//     case 'ADD_TO_CART':
//       break;
//     case 'CHANGE_CATEGORY':
//       newState.currentCategory = action.payload;
//       break;
//     default: break;
//   }

//   return newState;
// }


export default createStore(reducers);
