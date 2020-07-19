const initState = {
  categoriesList: [],
  currentCategory: 'coffee',
}

const reducer = (state = initState, action) => {
  let newState = {...state};

  switch (action.type) {
    case 'GET_CATEGORIES':
      newState.categoriesList = action.payload;
      break;
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'ADD_CATEGORY':
      newState.categoriesList.push(action.payload);
      break;
    default:
      break;
  };

  return newState;
}

export default reducer;