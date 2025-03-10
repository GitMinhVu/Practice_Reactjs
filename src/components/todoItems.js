import React from "react";
import PropTypes from "prop-types";

const TodoItems = (props) => {
    const todo = props.todoProps;
    const markComplete = props.markCompleteFunc;
    const deleteTodo = props.deleteTodoFunc;

    const todoItemStyle = {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: todo.completed ? "line-through" : "none",
    }

    const deleteButtonStyle = {
        background: "#ff0000",
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "20%",
        cursor: "pointer",
        float: "right",
    }
    
    return (
            <p style={todoItemStyle}>
                <input type="checkbox" onChange = {markComplete.bind(this, todo.id)} checked = {todo.completed} />
                {todo.title}
                <button style={deleteButtonStyle} onClick={deleteTodo.bind(this, todo.id)}>DELETE</button>
            </p>
    );
}


TodoItems.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired,
}

export default TodoItems;