import * as React from "react";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import { TodoReducer } from "./todo/reducer";
import { TodoContainer } from "./todo/containers";

const store = createStore(TodoReducer);

const Example = () => (
  <Provider store={store}>
    <TodoContainer />
  </Provider>
);

const example = () => (
  <Example />
);

export { example };