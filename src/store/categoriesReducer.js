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
    default:
      break;
  };

  return newState;
}

export default reducer;