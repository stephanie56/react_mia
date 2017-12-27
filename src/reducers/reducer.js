// const initialState = {
//   breakDuration: 3,
//   workDuration: 1,


//   numOfWorkSessions: 0,
//   isOnWork: true,
//   isTimerOn: true,

//   taskList: [],
//   activeTask: "Refactor Mia",
//   message: "You haven't worked yet. Add a new task to start!"

// }
//
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREASE_BREAK_COUNTER':
//       return {
//         ...state,
//         breakDuration: state.breakDuration + 1
//       };
//     case 'DECREASE_BREAK_COUNTER':
//       return {
//         ...state,
//         breakDuration: state.breakDuration > 0 ? (state.breakDuration - 1) : state.breakDuration
//       }
//     case 'INCREASE_WORK_COUNTER':
//       return {
//         ...state,
//         workDuration: state.workDuration + 1
//       }
//     case 'DECREASE_WORK_COUNTER':
//       return {
//         ...state,
//         workDuration: state.workDuration > 0 ? (state.workDuration - 1) : state.workDuration
//       }
//     case 'START_TIMER':
//       return {
//         ...state,
//         isTimerOn: true
//       }
//     case 'STOP_TIMER':
//       return {
//         ...state,
//         isTimerOn: false
//       }
//     default:
//       // error tester: cannot use this to intialize state?
//       console.log(`active task is ${state.clockInitTime}`);
//       return state;
//   }
// }
//
// export default reducer;
