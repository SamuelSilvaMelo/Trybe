import React from 'react';
import dataStates from '../data/dataStates';
import { connect } from 'react-redux';
import { inputValue } from '../redux/actions';

function State(props) {
  const { inputValue } = props;

  return (
    <div>
      <label className="label-definition">Estado:</label>
        <select
          name="state"
          className="select-definition"
          onChange={ inputValue }
          required={ true }
        >
        {dataStates.map((state) => 
          <option
            value={ `${state.name}-${state.ID}` }
            key={ state.ID }
          >
              { state.name }
          </option>
        )}
        </select>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  inputValue: ({ target }) => dispatch(inputValue(target)),
});

export default connect(null, mapDispatchToProps)(State);
