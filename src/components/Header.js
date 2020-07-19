import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Header(props) {
  let cartDisplay = [];

  if (props.cartContents) {
    props.cartContents.forEach( (product, idx) => {
      cartDisplay.push(<li key={idx}>{product.display_name}</li>);
    })
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

export default connect(mapStateToProps)(Header);