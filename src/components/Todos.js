import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => (
  <span>
    {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => completeTodo(todo.id)} />
    ))}
  </span>
);

export default Todos;
