import React from 'react';
import { connect } from 'react-redux';

function Categories(props) {
  let categoriesDisplay = [];

  for (let i = 0; i < props.categories.length; i++) {
    categoriesDisplay.push(
      <button 
        key={i} 
        onClick={(e) => {
          props.dispatch({
          type: 'CHANGE_CATEGORY',
            payload: props.categories[i].name,
          })
      }}>
        {props.categories[i].displayName || props.categories[i].name}
      </button>
    )
  }

  return (
    <div>
      { categoriesDisplay }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(Categories);