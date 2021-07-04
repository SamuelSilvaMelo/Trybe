import React from 'react';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

class TrafficSignal extends React.Component {

  renderSignal = (signalColor) => {
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { signalColor, changeSignal } = this.props;

    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={ () => changeSignal('red') } >Red</button>
          <button type="button" onClick={ () => changeSignal('yellow')} >Yellow</button>
          <button type="button" onClick={ () => changeSignal('green')} >Green</button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.changeSignalReducer.signal,
});

const MapDispatchToProps = (dispatch) => ({
  changeSignal: (signal) => dispatch(changeSignal(signal))
});

export default connect(mapStateToProps, MapDispatchToProps)(TrafficSignal);