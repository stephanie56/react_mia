import React, { Component } from 'react';
import TimeController from './components/TimeController';
import Clock from './components/Clock';
import TaskField from './components/TaskField';

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

export default App;
