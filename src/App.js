import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

import Categories from './components/Categories.js'
import Products from './components/Products.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Virtual Store</h1>
        <Categories />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
