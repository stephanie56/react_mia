import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onBreakCounterIncrease, onBreakCounterDecrease, onWorkCounterIncrease, onWorkCounterDecrease } from '../action/actionCreator';

import Counter from '../components/Counter';

class TimeController extends Component {

  render() {
    return(
      <div>
        <Counter
          name={'Set Break Time'}
          count={ this.props.breakDuration }
          onIncrement = { this.props.onBreakCounterIncrease }
          onDecrement = { this.props.onBreakCounterDecrease }
        />
        <Counter
          name={'Set Work Time'}
          count={ this.props.workDuration }
          onIncrement = { this.props.onWorkCounterIncrease }
          onDecrement = { this.props.onWorkCounterDecrease }
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
  onBreakCounterIncrease: () => dispatch(onBreakCounterIncrease()),
  onBreakCounterDecrease: () => dispatch(onBreakCounterDecrease()),
  onWorkCounterIncrease: () => dispatch(onWorkCounterIncrease()),
  onWorkCounterDecrease: () => dispatch(onWorkCounterDecrease())
})

export default connect(mapStateToProps, mapDispatchtoProps)(TimeController);
