import React from 'react';

class Occupation extends React.Component {
  render() {
    const { inputValue, occupationAlert } = this.props;
    return (
      <label>
        Cargo:
        <textarea
          name="occupation"
          maxLength="40"
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