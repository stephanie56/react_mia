import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';

class TimeController extends Component {
  render() {
    return(
      <div>
        <Counter name={'Set Break Time'} count={ this.props.breakDuration } />
        <Counter name={'Set Work Time'} count={ this.props.workDuration } />
	    </div>
    )
  };
}

const mapStateToProps = (state) => ({
  breakDuration: state.breakDuration,
  workDuration: state.workDuration
});

export default connect(mapStateToProps)(TimeController);
