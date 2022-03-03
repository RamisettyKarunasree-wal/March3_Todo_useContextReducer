import { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoList = () => {
  const values = useContext(TodoContext);
  const deleteTodo = (index) => {
    values.dispatch({ type: "deleteTodo", index: index });
  };
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>delete</th>
        </tr>
        {values.state.map((val, index) => {
          return (
            <tr>
              <td>{val.title}</td>
              <td>{val.status}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default TodoList;
