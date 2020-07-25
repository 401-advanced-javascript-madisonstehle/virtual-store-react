const initState = {
  initProducts: [],
  activeProduct: {},
}

const reducer = (state = initState, action) => {
  const newState = {...state}

  switch (action.type) {
    case 'GET_PRODUCTS':
      newState.initProducts = action.payload;
      break;
    case 'ADD_PRODUCT':
      newState.initProducts.push(action.payload);
      break;
    case 'SHOW_DETAILS':
      newState.activeProduct = newState.initProducts.filter( product => product._id === action.payload )[0];
      break;
    default:
      break;
  };

  return newState;
}

export default reducer;
