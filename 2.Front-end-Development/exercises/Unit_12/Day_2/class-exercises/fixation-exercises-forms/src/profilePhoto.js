import React from 'react';

class ProfilePhoto extends React.Component {
  render() {
    const { handleSubmit, fileInput } = this.props

    return (
      <label>
        Foto de Perfil:
        <input name="profilePhoto" type="file" onSubmit={handleSubmit} ref={fileInput}></input>
      </label>
    )
  }
}

export default ProfilePhoto;
