import moment from 'moment';

import firebase, {firebaseRef} from './../firebase/index';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

//add Todo to firebase
export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      //remove from firebase
      completedAt: null
    };
    //
    const todoRef = firebaseRef.child('todos').push(todo);
    //return for test chaining
    return todoRef.then(() => {
      //dispatch addTodo after todo is saved on firebase
      dispatch(addTodo({
        ...todo,
        //add id property, that was created by firebase, to todo object
        id: todoRef.key
      }));
    })
  }
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) =>{
      const todos = snapshot.val() || {};
      const parsedTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id, updates));
    });
  };
};