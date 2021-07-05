import React from 'react';
import { connect } from 'react-redux';
import { doneTask } from './redux/actions/addTodo'
import PropTypes from 'prop-types'

function Item(props) {
  const { content, doneTask } = props
  return (
    <div className="Item" onClick={ doneTask }>
      { content }
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  doneTask: ({ target }) => dispatch(doneTask(target))
})

Item.propTypes = {
  content: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(Item);
