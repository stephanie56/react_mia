const initialState = {
  breakDuration: 3,
  workDuration: 10,
  currentTask: "Session",
  timeLeft: 10,
  message: "You haven't worked yet. Add a new task to start!",
}

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
