import React from 'react';

// Components
import TimeController from './containers/TimeController';
import Clock from './containers/Clock';
import TaskField from './containers/TaskField';

// Styles
import './stylesheets/app.css';

const App = () => (
  <div className="App">
    <TimeController />
    <Clock />
    <TaskField />
  </div>
);

export default App;
