import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer() {
  return (
    <AppBar position="" color="primary">
        <Toolbar>
          <Typography variant="h7">
            &copy; 2020 Madison Stehle  
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Footer;