import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/store-actions.js';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Categories(props) {
  const { getCategories } = props;

  useEffect( () => {
    getCategories();
  }, [getCategories]);


  let categoriesDisplay = [];

  for (let i = 0; i < props.categoriesList.length; i++) {
    categoriesDisplay.push(
      <Button
        variant="contained"
        color="primary"
        key={i} 
        onClick={(e) => {
          props.changeCategory(props.categoriesList[i].name)
        }}>
        {props.categoriesList[i].display_name || props.categoriesList[i].name}
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
    categoriesList: state.categories.categoriesList,
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getCategories: (data) => dispatch( actions.getCategories(data) ),
  changeCategory: (payload) => dispatch( actions.changeCategory(payload) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);