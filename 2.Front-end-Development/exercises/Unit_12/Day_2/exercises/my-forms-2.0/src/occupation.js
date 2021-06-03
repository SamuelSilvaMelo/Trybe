import React from 'react';

class Occupation extends React.Component {
  render() {
    const { inputValue, occupationAlert, occupation } = this.props;
    return (
      <label>
        Cargo:
        <textarea
          name="occupation"
          maxLength="40"
          value={ occupation }
          required={true}
          onChange={ inputValue }
          onMouseEnter={ occupationAlert }
        >
        </textarea>
      </label>
    )
  }
}

export default Occupation;