import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store.js';

import Header from './components/Header.js';
import Categories from './components/Categories.js';
import Products from './components/Products.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />
        <div className="App">
          <Header />
          <Categories />
          <Products />
          <Footer />
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
