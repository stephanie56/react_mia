import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return(
        <div>
          <span>{ this.props.name }</span>
          <button
            onClick={() => this.props.onIncrement()}
          >+</button>
          <span>{ this.props.count }</span>
          <button
            onClick={() => this.props.onDecrement()}
          >-</button>
        </div>
    )
  };
}

export default Counter;
