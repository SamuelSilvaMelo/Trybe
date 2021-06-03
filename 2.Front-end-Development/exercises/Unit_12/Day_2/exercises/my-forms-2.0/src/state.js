import React from 'react';
import dataStates from './dataStates'

class State extends React.Component {
  render() {
    const { inputValue, state } = this.props;
    return (
      <div>
        <label class="label-definition">Estado:</label>
          <select
            class="select-definition"
            name="state"
            value={ state }
            onClick={inputValue}
            required={true}
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
    )
  }
}

export default State
