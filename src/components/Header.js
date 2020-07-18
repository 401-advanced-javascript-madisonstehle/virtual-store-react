import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';
// import { Mail } from '@material-ui/icons'


function Header(props) {
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
        <h4>In Cart: {props.cartCount}</h4>
        <Button
          variant="contained"
          color="secondary"
        >View Cart</Button>
      </Container>

      {/* <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge> */}
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