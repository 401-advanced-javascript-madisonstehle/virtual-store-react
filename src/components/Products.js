import React from 'react';
import { connect } from 'react-redux';

function Products(props) {
  let productDisplay = [];

  for (let i= 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory) {
    productDisplay.push(
      <h3 key={i}>
        {props.products[i].name}
      </h3>)
    }
  }

  if (productDisplay) {
    return (
      <div>
        <h2>Products</h2>
        { productDisplay }
      </div>
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
    products: state.products,
    currentCategory: state.currentCategory,
  }
}

export default connect(mapStateToProps)(Products);