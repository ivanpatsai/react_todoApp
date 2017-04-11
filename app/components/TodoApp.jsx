import React, {Component} from 'react';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList'
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component {

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}