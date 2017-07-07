import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import TimeController from './containers/TimeController';
import Clock from './containers/Clock';
import TaskField from './containers/TaskField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeController />
        <Clock />
        <TaskField />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
