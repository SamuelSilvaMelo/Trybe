import React from 'react'

class FullName extends React.Component {
  render() {
    const { changeInfo } = this.props
    return(
      <label>
      Nome Completo:
      <input name="fullName" onChange={changeInfo} type="text" />
    </label>
    )
  }
}

export default FullName;
