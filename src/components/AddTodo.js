import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

export default function AddTodo() {
  let input;

  const dispatch = useDispatch();

  return (
    <span className="col-md-12">
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input className="mb-3 form-control col-md-12" placeholder="Todo Title" ref={node => (input = node)} />
        <span className="w-100">
          <button className="btn btn-primary mb-3 float-right" type="submit">Add Todo</button>
        </span>
      </form>
    </span>
  );
}