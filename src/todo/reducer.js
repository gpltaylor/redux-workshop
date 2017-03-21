import { ADD_TODO } from "./actions";

// Reducer
function TodoReducer(state = [{ message: 'get milk', priority: 2 }], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { message: action.text, priority: action.priority }
      ]
    default:
      return state
  }
};

export { TodoReducer };