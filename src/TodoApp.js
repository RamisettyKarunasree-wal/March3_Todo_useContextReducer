import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const initialValue = [{title:"Studying",status:"Completed"}];
  const [state, dispatch] = useReducer(TodoReducer, initialValue);
  let reducerValues = { state, dispatch };
  return (
    <div className="item">
        <h1>Todo App</h1>
      <TodoContext.Provider value={reducerValues}>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
};
export default TodoApp;
