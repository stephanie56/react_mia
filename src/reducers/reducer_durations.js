const initialState = {
  breakTime: 3,
  workTime: 20
};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'INCREASE_BREAK_COUNTER':
      return {...state, breakTime: state.breakTime + 1};

    case 'DECREASE_BREAK_COUNTER':
      return state.breakTime > 0 ? {...state, breakTime: state.breakTime - 1} : {...state, breakTime: 0};

    case 'INCREASE_WORK_COUNTER':
      return {...state, workTime: state.workTime + 1};

    case 'DECREASE_WORK_COUNTER':
      return state.workTime > 0 ? {...state, workTime: state.workTime - 1} : {...state, workTime: 0};

    default:
      return state;
  }
}
