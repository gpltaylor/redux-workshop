// Actions
let nextTodoId = 0;
export const ADD_TODO = "ADD_TODO";

export const addTodo = (text, priority = 0) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  priority
});

// Reducer Helper Method
export const getTodos = (state) => {
  return state;
};