import React from 'react';

class SendBtn extends React.Component {
  render() {
    const { userTermsInfo } = this.props

    if (userTermsInfo === true) {
      return (
        <fieldset>
          <button className="submit-btn" disabled={true} type="submit">Enviar</button>
        </fieldset>
      )
    } else {
      return (
        <fieldset>
          <button className="submit-btn" disabled={false} type="submit">Enviar</button>
        </fieldset>
      )
    }
  }
}

export default SendBtn;
