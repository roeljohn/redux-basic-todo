import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../api";
import Todos from "./Todos";

//List of Incomplete Todos
export default function UpcomingTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => {
    return {
      todos: state.todos
    };
  });
  const onToggle = useCallback(id => dispatch(completeTodo(id)), [dispatch]);
  const todoUpcoming = todos.filter(t => !t.completed);
  return <Todos todos={todoUpcoming} completeTodo={onToggle} />;
}