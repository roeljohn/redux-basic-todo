import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, toogleTodo }) => (
  <span>
    {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => toogleTodo(todo.id)} />
    ))}
  </span>
);

export default Todos;
