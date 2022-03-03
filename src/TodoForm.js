import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

const TodoForm = () => {
  const values = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [todoStatus, setStatus] = useState("Completed");
  const addTodo = () => {
    values.dispatch({
      type: "add",
      todoObj: { title: title, status: todoStatus },
    });
  };
  const deleteAll = () => {
    values.dispatch({
      type: "deleteAll",
    });
  };
  return (
    <div>
      <b>Enter Title:</b>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <b>Choose Status:</b>
      <select
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="Complete">Complete</option>
        <option value="InComplete">InComplete</option>
      </select>
      <br />
      <button className="prime_btn" onClick={addTodo}>
        Add Todo
      </button>
      <br />
      <button className="del_btn" onClick={deleteAll}>
        Delete All
      </button>
      <br />
    </div>
  );
};
export default TodoForm;
