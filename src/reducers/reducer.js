const initialState = {
  breakDuration: 3,
  workDuration: 10,
  currentTask: "Session",
  message: "You haven't worked yet. Add a new task to start!",
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_BREAK_COUNTER':
      return {
        ...state,
        breakDuration: state.breakDuration + 1
      };
    case 'DECREASE_BREAK_COUNTER':
      return {
        ...state,
        breakDuration: state.breakDuration > 0 ? (state.breakDuration - 1) : state.breakDuration
      }
    case 'INCREASE_WORK_COUNTER':
      return {
        ...state,
        workDuration: state.workDuration + 1
      }
    case 'DECREASE_WORK_COUNTER':
      return {
        ...state,
        workDuration: state.workDuration > 0 ? (state.workDuration - 1) : state.workDuration
      }
    default:
      return state;
  }
}

export default reducer;
