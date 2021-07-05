import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTask } from './redux/actions/addTodo'
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  render() {
    const { addTodo, removeTask, disabled } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => this.addItem(textTodo, addTodo) } />
        <input data-testid="id-remove" id="btnRemove" type="button" value="Remover" disabled={ disabled } onClick={ removeTask } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disabled: state.todoListReducer.disabled,
})

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeTask: () => dispatch(removeTask()),
});

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
