import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/store-actions.js';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Header(props) {
  let cartDisplay = [];

  if (props.cartContents) {
    props.cartContents.forEach( (product, idx) => {
      cartDisplay.push(
        <li key={idx}>
          {product.display_name}
          <Button 
          color="primary"
          size="small"
          onClick = { (e) => {
            props.removeFromCart(idx);
          }}>
          Remove From Cart
          </Button>
        </li>
      );
    });
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">
            Virtual Store
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <h4>In Cart: {props.cartCount} Items</h4>
        <ul>
          { cartDisplay }
        </ul>
      </Container>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    cartContents: state.cart.cartContents,
    cartCount: state.cart.cartCount,
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  removeFromCart: (idx) => dispatch( actions.removeFromCart(idx) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);