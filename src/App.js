import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store/store.js';

import Header from './components/Header.js';
import Categories from './components/Categories.js';
import Products from './components/Products.js';
import ProductDetails from './components/ProductDetails.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <div className="App">
          <Header />
          <Route exact path="/">
            <Categories />
            <Products />
          </Route>
          <Route path="/details/:id" component={ ProductDetails }/>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
