const initialState = {
  breakDuration: 3,
  workDuration: 10,
  currentTask: "Session",
  timeLeft: 10,
  message: "You haven't worked yet. Add a new task to start!",
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        ...state,
        breakDuration: state.breakDuration + 1
      };
    case 'DECREASE_COUNTER':
      return {
        ...state,
        breakDuration: state.breakDuration - 1
      }
    default:
      return state;
  }
}

export default reducer;
