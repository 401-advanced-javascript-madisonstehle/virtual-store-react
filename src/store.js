import { createStore } from 'redux';


const initState = {
  cart: 0,
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: '' }
  ],
  products: [
    { 
      name: 'TV', 
      description: 'to watch the things', 
      stock: 5, 
      price: 400, 
      category:'electronics' 
    }, 
    { 
      name: 'Computer', 
      description: 'this is what you need if coding is what you do', 
      stock: 5, 
      price: 800, 
      category:'electronics' 
    },
    { 
      name: 'Coffee', 
      description: 'stay awake with the power of caffeine', 
      stock: 5, 
      price: 15, 
      category: 'food' 
    },
    { 
      name: 'Potato', 
      description: 'Soft and warm when mashed', 
      stock: 5, 
      price: 2, 
      category:'food' 
    },
  ],
  currentCategory: '',
}

const reducer = ( state = initState, action ) => {
  let newState = { ...state };

  switch ( action.type ) {
    case 'ADD_TO_CART':
      break;
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    default: break;
  }

  return newState;
}


export default createStore(reducer);
