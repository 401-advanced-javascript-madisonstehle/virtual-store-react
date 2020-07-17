const initState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'books', displayName: 'Books'}
  ],
  currentCategory: 'food',
}

const reducer = (state = initState, action) => {
  let newState = {...state};

  switch (action.type) {
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'ADD_CATEGORY':
      newState.categories.push(action.payload);
      break;
    default:
      break;
  };

  return newState;
}

export default reducer;