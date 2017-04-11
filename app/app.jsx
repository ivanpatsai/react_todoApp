import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom';
import './styles/main.scss';
import {startAddTodos} from './actions/action';
import TodoApp from 'TodoApp';
const store = require('./store/configureStore').configure();


store.dispatch(startAddTodos());

$('document').foundation();


ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>,
  document.getElementById('app'));