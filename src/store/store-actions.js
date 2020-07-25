import axios from 'axios';

export const getCategories = () => async dispatch => {
  let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/categories');
  dispatch(renderCategories(results.data))
}

const renderCategories = payload => {
  return {
    type: 'GET_CATEGORIES',
    payload
  }
}

export const getProducts = () => async dispatch => {
  let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/products');
  dispatch(renderProducts(results.data));
}

const renderProducts = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const changeCategory = payload => {
  return {
    type: 'CHANGE_CATEGORY',
    payload
  }
}

export const addToCart = (product) => {
  return { 
    type: 'ADD_TO_CART', 
    payload: product 
  };
}

export const removeFromCart = (idx) => {
  return { 
    type: 'REMOVE_FROM_CART', 
    payload: idx
  };
}

export const getOneProduct = (id) => {
  return {
    type: 'SHOW_DETAILS',
    payload: id,
  }
}