import * as React from "react";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

// Reducer
function TodoReducer(state = [{ message: 'get milk', priority: 2 }], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { message: action.text, priority: action.priority }
      ]
    default:
      return state
  }
};

// Reducer Helper Method
const getTodos = (state) => {
  return state;
};

// Actions
let nextTodoId = 0
export const addTodo = (text, priority = 0) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  priority
});

const store = createStore(TodoReducer);

class Todo extends React.Component {
  addTodo = () => {
    this.props.dispatch(addTodo(this.message.value, parseInt(this.priority.value, 10)));
  }

  render = () => (
    <div>
      <h1>TODO Demo</h1>
      <Helper />

      {this.props.todos.map(item => <p key={item.message}>{item.message} ({item.priority})</p>)}
      <div>
        <input name="message" ref={item => this.message = item} />
        <input name="priority" ref={item => this.priority = item} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    </div>
  )
}

const componentState = (state) => ({
  todos: getTodos(state)
});

const Helper = () => (
  <div>
    <p>This is a basic todo example, enter a todo, input the priority and click add.</p>
    <p>You should be able to see your new TODO item added to the reducer</p>
    <h3>TODO</h3>
    <p>
      In this workshop, we are going to extend this example to filter by priority.
      </p>
    <ul>
      <li>Create Reducer method to return filtered quotes</li>
      <li>Allow us to default the priority</li>
      <li>Show a counter of items displayed, and items hidden</li>
      <li>(Extra points) Flush the inputs when adding an item</li>
    </ul>
  </div>
)

const TodoComponent = connect(componentState)(Todo)

const Example = () => (
  <Provider store={store}>
    <TodoComponent />
  </Provider>
)


const example = () => (
  <Example />
);

export { example };