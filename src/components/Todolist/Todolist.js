import React from "react";
import css from "./Todolist.css";

const Todolist = ({ todos, onDeleteTodo }) => (
  <ul className="Todolist">
    {todos.map(({ id, text }) => (
      <li key={id} className="Todolist_item">
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default Todolist;
