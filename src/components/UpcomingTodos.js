import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import Todos from "./Todos";

export default function UpcomingTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => {
    return {
      todos: state.todos
    };
  });
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const todoUpcoming = todos.filter(t => !t.completed)
  return <Todos todos={todoUpcoming} toogleTodo={onToggle} />;
}