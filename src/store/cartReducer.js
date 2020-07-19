const initState = {
  cartContents: [],
  cartCount: 0,
}

const reducer = (state = initState, action) => {
  let newState = {...state}

  switch (action.type) {
    case 'ADD_TO_CART':
      newState.cartContents.push(action.payload);
      newState.cartCount++;
      break;
    case 'REMOVE_FROM_CART':
      newState.cartContents = newState.cartContents.filter( (val) => {
        return val.name !== action.payload;
      });
      newState.cartCount--;
      break;
    default:
      break;
  }

  return newState;
}

export default reducer;
