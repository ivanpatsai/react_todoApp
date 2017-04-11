import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import {AddTodo} from 'AddTodo';
import * as actions from './../../actions/action';


describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const todoText = 'test';
    const action = actions.startAddTodo(todoText);
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.setState({todoText: todoText});
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.setState({todoText: todoText});
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(todoText);
  });

});