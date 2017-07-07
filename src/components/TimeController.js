import React, { Component } from 'react';
import Counter from './Counter';

class TimeController extends Component {
  render() {
    return(
      <div>
        <Counter name={'Set Break Time'} count={3} />
        <Counter name={'Set Work Time'} count={10} />
	    </div>
    )
  };
}

export default TimeController;
