import React, {Fragment} from "react";

const TodoItems = (props) => {
    // console.log(props);
    const todo = props.todoProps;

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
                <input type="checkbox" />
                {todo.title}
                <button style={deleteButtonStyle}>DELETE</button>
            </p>
    );
}

export default TodoItems;