import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return(
        <div>
          <span>{ this.props.name }</span>
          <button>+</button>
          <span>{ this.props.count }</span>
          <button>-</button>
        </div>
    )
  };
}

export default Counter;
