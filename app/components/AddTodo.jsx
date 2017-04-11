import React, {Component} from 'react';
import {connect} from 'react-redux';

import {startAddTodo} from './../actions/action';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    //Preserve onChange event value from input
    this.state = {
      todoText: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //prevent page reload
    e.preventDefault();
    const {dispatch} = this.props;
    const todoText = this.state.todoText;
    if (todoText.length > 0) {
      //clear the input after submit
      this.setState({todoText: ''});
      //dispatch startAddTodo to save on firebase
      dispatch(startAddTodo(todoText));
    } else {
      //if submit on empty input - focus on input
      this.refs.todoText.focus();
    }

  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Todo"
            onChange={e => this.setState({todoText: e.target.value})}
            value={this.state.todoText}
            ref="todoText"
          />
          <button type="submit" className="button expanded primary">AddTodo</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AddTodo);