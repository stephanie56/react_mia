import React, { Component } from 'react';
import TimeController from './components/TimeController';
import Clock from './components/Clock';
import TaskField from './components/TaskField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeController />
        <Clock currentTask={'Session'} timeLeft={10} />
        <TaskField message={'You haven\'t worked yet. Add a new task to start!'} />
      </div>
    );
  }
}

export default App;
