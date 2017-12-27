import { combineReducers } from 'redux';

import DurationReducer from './reducer_durations';
import SessionReducer from './reducer_sessions';
import TaskReducer from './reducer_tasks';

export default combineReducers({
  durations: DurationReducer,
  sessions: SessionReducer,
  tasks: TaskReducer
});
