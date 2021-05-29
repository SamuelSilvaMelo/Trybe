import React from 'react';

class UserTerms extends React.Component {
  render() {
    const { changeInfo } = this.props

    return (
      <label>
        Aceita os termos de usuário:
        <input name="userTerms" type="checkbox" onChange={changeInfo}></input>
    </label>
    )
  }
}

export default UserTerms;
