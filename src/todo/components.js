import * as React from "react";

export const Helper = () => (
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
      <li>(Extra points) Add category dropdown for each todo</li>
    </ul>
    <h4>References</h4>
    <p>
      https://github.com/reactjs/react-redux/blob/master/docs/api.md<br />
      https://redux.js.org/docs/introduction/Examples.html
    </p>
  </div>
)

export class Todo extends React.Component {
  addTodo = () => {
    this.props.addTodo(this.message.value, parseInt(this.priority.value, 10));
  }

  deleteTodo = (e) => {
    console.log(e);
    this.props.deleteTodo(e);
  }

  render = () => (
    <div>
      <h1>TODO Demo1</h1>
      <Helper />

      {this.props.todos.map(item =>
        <p
          key={item.message}
          onClick={this.deleteTodo.bind(this, item)}>{item.id} {item.message} - {item.priority}</p>)
      }
      <div>
        <input name="message" ref={item => this.message = item} />
        <input name="priority" ref={item => this.priority = item} />
        <button onClick={this.addTodo}>Add</button>
        <button onClick={this.props.filter}>filter</button>
      </div>
    </div>
  )
}

export class TodoList extends React.Component {
  addTodo = () => {
    this.props.addTodo(this.message.value, parseInt(this.priority.value, 10));
  }

  deleteTodo = (e) => {
    console.log(e);
    this.props.deleteTodo(e);
  }

  render = () => (
    <div>
      <h1>TODO Demo</h1>
      <p>An improved design for our TODO List.</p>
      <ul>
        {this.props.todos.map(item => (
          <li key={item.message} onClick={this.deleteTodo.bind(this, item)}>{item.message} ({item.priority})</li>
        ))}
      </ul>
      <div>
        <input name="message" ref={item => this.message = item} placeholder="enter todo" />
        <input name="priority" ref={item => this.priority = item} placeholder="priority (0: Low, 10: High)" />
        <button onClick={this.addTodo}>Add</button>
      </div>
    </div>
  )
}