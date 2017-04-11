import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from './../actions/action';

export class TodoSearch extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            value={searchText}
            onChange={() => {
              const searchText = this.searchText.value;
              dispatch(setSearchText(searchText))
            }}
            ref={(input) => {
              this.searchText = input
            }}
            placeholder="Search todos"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref={(input) => {
                this.showCompleted = input
              }}
              onChange={() => {
                dispatch(toggleShowCompleted())
              }}
            />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
}

export default connect(mapStateToProps)(TodoSearch)