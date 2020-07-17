import React from 'react';
import { connect } from 'react-redux';

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

      <h4>Cart: {props.cartCount}</h4>
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