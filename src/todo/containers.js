import { connect } from 'react-redux'

import { getTodos, addTodo, getTopTodos, deleteTodo } from "./actions";
import { TodoList as todo } from "./components";

// Data we want
const basicState = (state) => ({
  todos: getTodos(state)
});

// Things we want to do
const basicDispatch = (dispatch, state) => ({
  addTodo: (message, priority) => {
    dispatch(addTodo(message, priority))
  },
  deleteTodo: (todo) => {
    dispatch(deleteTodo(todo.message));
  }
});

// Connect the component we want, with the data we want and the things we want it to do
export const TodoContainer = connect(basicState, basicDispatch)(todo)