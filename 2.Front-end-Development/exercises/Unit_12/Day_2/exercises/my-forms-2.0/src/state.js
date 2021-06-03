import React from 'react';
import dataStates from './dataStates'

class State extends React.Component {
  render() {
    const { inputValue, state } = this.props;
    return (
      <label>
        Estado:
        <select 
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
      </label>
    )
  }
}

export default State
