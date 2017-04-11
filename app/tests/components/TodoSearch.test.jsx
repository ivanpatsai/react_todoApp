import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TodoList from 'TodoList';
import {TodoSearch} from 'TodoSearch';


describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'test Text';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.searchText);

    expect(spy).toHaveBeenCalledWith(action);

  });
  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    console.log(todoSearch);

    todoSearch.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);

  });


});