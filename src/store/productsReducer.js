const initState = {
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
    {
      name: 'The Paper Menagerie', 
      description: 'Insightful and stunning stories that plumb the struggle against history and betrayal of relationships in pivotal moments, this collection showcases one of our greatest and original voices.', 
      stock: 5, 
      price: 12, 
      category:'books' 
    },
    {
      name: 'The Spirit of Disobedience',
      description: 'White argues that the American left needs a new and compelling spiritual basis for its politics, and that its seeds can be discovered in Thoreau\'s spiritual politics of refusal and a return to human "fundamentals" especially work, home, and food.',
      stock: 3,
      price: 20,
      category: 'books'
    }
  ],
}

const reducer = (state = initState, action) => {
  const newState = {...state}

  switch (action.type) {
    default:
      break;
  };

  return newState;
}

export default reducer;
