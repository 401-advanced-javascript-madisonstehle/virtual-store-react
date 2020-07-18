import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../store/cartReducer.js';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Products(props) {
  let productDisplay = [];

  for (let i= 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory) {
    productDisplay.push(
      <div key={i}>
        <h3>
          {props.products[i].name}
        </h3>
        <Button 
          color="primary"
          size="small"
          onClick = { (e) => {
            console.log('click!');
            addToCart(props.dispatch({
              type: 'ADD_TO_CART',
              payload: props.products[i]
            }));
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
    products: state.products.products,
    currentCategory: state.categories.currentCategory,
    cartCount: state.cart.cartCount,
    cartContents: state.cart.cartContents
  }
}

export default connect(mapStateToProps)(Products);
