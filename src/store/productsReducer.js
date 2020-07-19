const initState = {
  initProducts: [],
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
    default:
      break;
  };

  return newState;
}

export default reducer;
