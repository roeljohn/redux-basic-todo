import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, incompleteTodo } from "../api";
import Todos from "./Todos";

//List of Completed Todos
export default function CompletedTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => {
    return {
      todos: state.todos
    };
  });
  const onToggle = useCallback(id => dispatch(incompleteTodo(id)), [dispatch]);
  const todoComplete = todos.filter(t => t.completed)
  return <Todos todos={todoComplete} completeTodo={onToggle} />;
}