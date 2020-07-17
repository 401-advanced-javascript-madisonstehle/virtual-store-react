import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Categories(props) {
  let categoriesDisplay = [];

  for (let i = 0; i < props.categories.length; i++) {
    categoriesDisplay.push(
      <Button
        variant="contained"
        color="primary"
        key={i} 
        onClick={(e) => {
          props.dispatch({
          type: 'CHANGE_CATEGORY',
            payload: props.categories[i].name,
          })
      }}>
        {props.categories[i].displayName || props.categories[i].name}
      </Button>
    )
  }

  return (
    <Container maxWidth="sm">
      { categoriesDisplay }
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps)(Categories);