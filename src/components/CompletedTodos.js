import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import Todos from "./Todos";

export default function CompletedTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => {
    return {
      todos: state.todos
    };
  });
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const todoComplete = todos.filter(t => t.completed)
  return <Todos todos={todoComplete} toogleTodo={onToggle} />;
}