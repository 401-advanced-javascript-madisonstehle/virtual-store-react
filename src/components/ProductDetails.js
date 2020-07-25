import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../store/store-actions.js';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function Details(props) {
  const {getOneProduct} = props;

  useEffect( () => {
    getOneProduct(props.match.params.id);
  }, [props.match.params.id, getOneProduct]);

  return(
    <Container>
    <Link to={'/'} >Back to All Products</Link>
      <Typography variant="h4" color="secondary">Details</Typography>
      <Typography variant="h5">{ props.product.display_name }</Typography>
      <Typography variant="body1">{props.product.description}</Typography>
    </Container>
  )
};

const mapStateToProps = (state) => {
  return {
    product: state.products.activeProduct,
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getOneProduct: (id) => dispatch( actions.getOneProduct(id) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);
