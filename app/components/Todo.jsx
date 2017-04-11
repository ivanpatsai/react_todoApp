import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {startToggleTodo} from './../actions/action';

export class Todo extends Component {
  render() {
    const {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    //return time when todo was created or completed
    const renderDate = () => {
      let message = 'Created ';
      let timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div
        className={todoClassName}
        onClick={() => {
          dispatch(startToggleTodo(id, !completed));
        }}>
        <div>
          <input
            type="checkbox"
            checked={completed}
          />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">
            {renderDate()}
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(Todo)