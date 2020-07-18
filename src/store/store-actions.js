import axios from 'axios';

export const getCategories = () => async dispatch => {
  let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/categories');
  console.log(results.data);
  dispatch(renderCategories(results.data))
}

const renderCategories = payload => {
  return {
    type: 'GET_CATEGORIES',
    payload
  }
}

export const getProducts = () => async dispatch => {
  let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/categories');
  console.log(results.data);
  dispatch(renderProducts(results.data));
}

const renderProducts = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const addToCart = (product) => {
  return { 
    type: 'ADD_TO_CART', 
    payload: product 
  };
}

export const removeFromCart = (id) => {
  return { 
    type: 'REMOVE_FROM_CART', 
    payload: id
  };
}


