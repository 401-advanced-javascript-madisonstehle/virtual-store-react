import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../store/store-actions.js';

import Container from '@material-ui/core/Container'

function Details(props) {
  const {getOneProduct} = props;

  useEffect( () => {
    getOneProduct(props.match.params.id);
  }, [props.match.params.id, getOneProduct]);

  return(
    <Container>
      <div>
        Details: { props.product.display_name }
      </div>
      <Link to={'/'} >Back to All Products</Link>
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
