import { ADD_TODO, DELETE_TODO } from "./actions";

// Reducer
function TodoReducer(state = [{ message: 'get milk', priority: 2 }], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { message: action.text.toUpperCase(), priority: action.priority }
      ]
      case DELETE_TODO:
        return state.filter(item => item.message !== action.message);
    default:
      return state
  }
};

export { TodoReducer };