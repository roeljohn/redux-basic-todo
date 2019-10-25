import React, { Component, useCallback } from 'react';
import UpcomingTodos from './components/UpcomingTodos'
import AddTodo from './components/AddTodo'
import { connect, useDispatch } from 'react-redux'
import { fetchAllTodos, fetchTodoById } from './api'
import CompleteTodos from './components/CompletedTodos';
import { completeTodo } from "./actions";


class App extends Component {
    componentDidMount() {
        this.props.TodoList()
        this.props.Todo()
      }
    onToggle(){
        const dispatch = useDispatch();
        useCallback(id => dispatch(completeTodo(id)), [dispatch]);
    }
      render() {

        return (
<div className="content">
    <div className="container">
        <div className="row">
            <AddTodo />
            <div className="col-lg-6">
                <div className="card-box">
                    <h4 className="text-dark header-title">Upcoming</h4>
                    <p className="text-muted m-b-30 font-13">Your awesome text goes here. Your awesome text goes here.</p>
                    <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                        <UpcomingTodos completeTodo={() => this.onToggle()} />
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card-box">
                    <h4 className="text-dark header-title">Completed</h4>
                    <p className="text-muted m-b-30 font-13">Your awesome text goes here. Your awesome text goes here.</p>
                    <ul className="sortable-list taskList list-unstyled ui-sortable" id="completed">
                        <CompleteTodos completeTodo={() => this.onToggle()} />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  );
    }
}
const mapStatetoProps = (state) => {
    return { todos: state.todos, todo: state.todo, error: state.error }
  }
  
  const mapDispatchprops = (dispatch) => {
    return { 
        TodoList: () => dispatch(fetchAllTodos()),
        Todo: () =>  dispatch(fetchTodoById('2'))
    }
  }
  
  
  export default connect(mapStatetoProps, mapDispatchprops)(App);