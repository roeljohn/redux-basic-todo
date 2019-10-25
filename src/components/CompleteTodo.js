import React from "react";

const CompleteTodo = ({ onClick, completed }) => {
    return (
        <div className="checkbox checkbox-custom checkbox-single float-right">
            <input type="checkbox" aria-label="Single checkbox Two" onClick={onClick} checked={completed ? true : false} />
            <label></label>
        </div>
    );
}

export default CompleteTodo;
