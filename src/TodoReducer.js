const TodoReducer = (state, action) => {
  if (action.type == "add") {
    return [...state, action.todoObj];
  }
  if (action.type == "deleteAll") {
    return [];
  }
  if ((action.type = "deleteTodo")) {
    const newTodos = state.filter((value,index) => {
      if (index == action.index) {
        return false;
      } else {
        return true;
      }
    });
    return newTodos;
  }
};
export default TodoReducer;
