// Actions
let nextTodoId = 0;
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text, priority = 0) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  priority
});

export const deleteTodo = (message) => {
  return {
    type: DELETE_TODO,
    message
  }
};

// Reducer Helper Method
export const getTodos = (state) => {
  return state;
};


export const getTopTodos = (state) => {
  return state.filter(item => item.priority > 5);
}