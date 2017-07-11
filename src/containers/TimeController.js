import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onCounterIncrease, onCounterDecrease } from '../action/actionCreator';

import Counter from '../components/Counter';

class TimeController extends Component {
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
  onCounterIncrease: () => dispatch(onCounterIncrease()),
  onCounterDecrease: () => dispatch(onCounterDecrease())
})

export default connect(mapStateToProps)(TimeController);
