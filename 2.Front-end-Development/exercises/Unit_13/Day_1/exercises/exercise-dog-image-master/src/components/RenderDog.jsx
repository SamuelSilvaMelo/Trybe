import React from 'react';

class RenderDog extends React.Component {
  render() {
    const { currentDog, requestDog } = this.props;

    return (
      <div>
        <img src={ currentDog } alt="Dog" />
        <button onClick={ requestDog }>Next Dog</button>
      </div>
    )
  }
}

export default RenderDog;
