import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  codeBlock: {
    backgroundColor: '#f3f2f2',
    padding: '1px 10px',
    margin: '10px 0',
  }
};

const codeBlock = `
import { combineReducers, createStore } from 'redux'

// Action (publish) to do something
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});

// Subscribe and update
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
};

let reducer = combineReducers({ visibilityFilter });
let store = createStore(reducer);
`;

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to Redux Workshop</h1>
        <p>
          To Develop a easy to follow platform to trying Redux        </p>
        <p>
          I want to allow you to learn Redux by doing, not reading, understanding the core parts that make up Redux's Flow
        </p>
        <div>
          The Three stages to Redux<br />
          Here's how to add <code style={styles.code}>Redux</code> to your app.
          <div
            style={styles.codeBlock}
            dangerouslySetInnerHTML={{ __html: `<pre>${codeBlock}</pre>` }}
          />
        </div>
        <div>
          Using Redux comes into three steps..
          <ul>
            <li>Reducer</li>
            <li>Actions</li>
            <li>Middleware</li>
          </ul>
        </div>
        <h2>Reducer</h2>
        <p>Subscribes to events and stores data in a common and shared location.
          The goal is to have a single place that's responsible for editing data'
        </p>

        <h2>Actions</h2>
        <p>Trigger an action to store data (somewhere). Also able to perform complex actions, for example 
          making a call to an API before saving to the Reduer.</p>
        
        <h2>Middleware</h2>
        <p>Listen to all actions in the background and hijack any actions of interest. 
          We can perform custom actions like logging and making API Calls. 
          This should however, be used with care</p>
      </div>
    );
  }
}
