import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
//thunk allow action generators to return function where  we can do smth async
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer} from './../reducers/reducers';


export function configure (initialState = {}) {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk)
  ));

  return store
};