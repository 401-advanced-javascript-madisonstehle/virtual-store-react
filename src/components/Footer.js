import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer() {
  return (
    <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="body1">
            &copy; 2020 Madison Stehle  
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Footer;