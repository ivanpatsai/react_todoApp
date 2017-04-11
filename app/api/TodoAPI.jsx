//API that filter todos array. It takes three arguments.
//todos - array of todos that will be filtered;
//showCompleted - show or hide completed todos(depends on
//checkbox checked attribute);
//searchText - sort todos by text that was entered into search field;
export default {
  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      //return uncompleted todos if showCompleted is false
      //and both if true
      return !todo.completed || showCompleted;
    });
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      //skip if search field is empty or
      //return todos that contains search text
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
    });

    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        //if a is not completed put it before b
        return -1;
      } else if (a.completed && !b.completed) {
        //if b is not completed put it before a
        return 1;
      } else {
        //if a and b are equal - order doesn't matter
        return 0;
      }
    });
    return filteredTodos;
  }
}