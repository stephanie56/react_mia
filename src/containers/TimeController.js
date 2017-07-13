import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onCounterIncrease, onCounterDecrease } from '../action/actionCreator';

import Counter from '../components/Counter';

class TimeController extends Component {

  _onIncrement() {

  }

  _onDecrement() {

  }

  render() {
    return(
      <div>
        <Counter
          name={'Set Break Time'}
          count={ this.props.breakDuration }
          onIncrement = { this.props.onCounterIncrease }
          onDecrement = { this.props.onCounterDecrease }
        />
        <Counter
          name={'Set Work Time'}
          count={ this.props.workDuration }
          onIncrement = { this.props.onCounterIncrease }
          onDecrement = { this.props.onCounterDecrease }
        />
	    </div>
    )
  };
}

const mapStateToProps = (state) => ({
  breakDuration: state.breakDuration,
  workDuration: state.workDuration
});

const mapDispatchtoProps = (dispatch) => ({
  onCounterIncrease: (count) => dispatch(onCounterIncrease(count)),
  onCounterDecrease: (count) => dispatch(onCounterDecrease(count))
})

export default connect(mapStateToProps, mapDispatchtoProps)(TimeController);
