import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/store-actions.js';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function Products(props) {
  const { getProducts } = props;

  useEffect( () => {
    getProducts();
  }, [getProducts])

  let productDisplay = [];

  for (let i= 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory) {
    productDisplay.push(
      <Card key={i}>
        <CardContent>
          <Typography variant='h6'>
            {props.products[i].display_name}
          </Typography>
          <Typography variant='body2'>
            {props.products[i].description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            color="primary"
            size="small"
            onClick = { (e) => {
              props.addToCart(props.products[i]);
            }}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      )
    }
  }

  if (productDisplay) {
    return (
      <Container maxWidth="sm">
        <h2>Products</h2>
        <Grid container spacing={4}>
          { productDisplay }
        </Grid>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
