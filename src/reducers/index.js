import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";
const intialState = {
  num: 0,
  todos: [],
  error: "",
  id: "",
  text: "",
  completed: false
}

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: action.id,
          title: action.title,
          completed: false
        },
        ...state
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "COMPLETE_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
    case "FetchData":
        return action.todos;
    default:
      return state;
  }
};

const todo = (state = [], action) => {
  switch (action.type) {
    case "FetchTodoById":
        return action.todo;
    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
export default combineReducers({
  todos,
  todo,
  visibilityFilter
});