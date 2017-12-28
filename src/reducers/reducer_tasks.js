const initialState = {
  activeTask: 'Unnamed Session',
  taskList: [],
  message: 'You have not started working yet! Add a task to get started.'
};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        activeTask: action.payload
      };

    default:
      return state;
  }
  return state;
}
