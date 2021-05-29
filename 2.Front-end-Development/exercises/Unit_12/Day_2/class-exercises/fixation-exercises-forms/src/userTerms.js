import React from 'react';

class UserTerms extends React.Component {
  render() {
    const { changeInfo, userTermsInfo } = this.props

    if (userTermsInfo === true) {
      document.querySelector('.submit-btn').disabled = true
    } else {
      document.querySelector('.submit-btn').disabled = ''
    }

    return (
      <label>
        Aceita os termos de usuário:
        <input name="userTerms" type="checkbox" onChange={changeInfo}></input>
    </label>
    )
  }
}

export default UserTerms;
