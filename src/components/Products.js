import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/store-actions.js';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function Products(props) {
  const { getProducts } = props;

  useEffect( () => {
    getProducts();
  }, [getProducts])

  let productDisplay = [];

  for (let i= 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory) {
    productDisplay.push(
      <div key={i}>
        <h3>
          {props.products[i].display_name}
        </h3>
        <Button 
          color="primary"
          size="small"
          onClick = { (e) => {
            console.log('click!');
            props.addToCart(props.products[i]);
          }}>
          Add to Cart
        </Button>
      </div>
      )
    }
  }

  if (productDisplay) {
    return (
      <Container maxWidth="sm">
        <h2>Products</h2>
        { productDisplay }
      </Container>
    )
  } else {
    return (
      <div>
        <h2>We have no products at this time</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.initProducts,
    currentCategory: state.categories.currentCategory,
    cartCount: state.cart.cartCount,
    cartContents: state.cart.cartContents
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getProducts: (data) => dispatch( actions.getProducts(data) ),
  addToCart: (data) => dispatch( actions.addToCart(data) ),
  // removeFromCart: (id) => dispatch( actions.removeFromCart(id) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
