import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

import Header from './components/Header.js';
import Categories from './components/Categories.js';
import Products from './components/Products.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Categories />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
