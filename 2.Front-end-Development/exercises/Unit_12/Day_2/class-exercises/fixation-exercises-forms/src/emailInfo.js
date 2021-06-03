import React from 'react'

class EmailInfo extends React.Component {
  render() {
    const { changeInfo } = this.props

    return (
      <label>
      Email:
      <input name="email" onChange={changeInfo} type="email" />
    </label>
    )
  }
}

export default EmailInfo;
