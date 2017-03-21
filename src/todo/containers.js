import { connect } from 'react-redux'

import { getTodos, addTodo } from "./actions";
import { Todo as todo } from "./components";

// Data we want
const basicState = (state) => ({
  todos: getTodos(state)
});

// Things we want to do
const basicDispatch = (dispatch, state) => ({
  addTodo: (message, priority) => {
    dispatch(addTodo(message, priority))
  }
});

// Connect the component we want, with the data we want and the things we want it to do
export const TodoContainer = connect(basicState, basicDispatch)(todo)