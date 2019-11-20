import React from "react";
import PropTypes from "prop-types";
import CompleteTodo from './CompleteTodo'

const Todo = ({ onClick, completed, title }) => (
    <li className={`task-info ui-sortable-handle ${completed ? "line-through" : "none"}`} id="task17">
        {completed ? 'true ' : 'false '}
        <CompleteTodo completed={completed ? true : false} onClick={onClick} />
        {title}
        <div className="clearfix"></div>
        <div className="mt-3">
            <p className="float-right mb-0 mt-2">
                <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
            </p>
            <p className="mb-0">
                <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="task-user" className="thumb-sm rounded-circle mr-2" /> <span className="font-bold font-secondary">Maya Didas</span></a>
            </p>
        </div>
    </li>
);

export default Todo;
