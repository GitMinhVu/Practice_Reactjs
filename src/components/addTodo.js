import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
    const [title, setTitle] = useState('')
    const addTodo = props.addTodoFunc;

    const addTodoStyle = {
        display: 'flex',
    }
    const addTodoInputStyle = {
        flex :'10',
        padding : '5px'
    }
    const addTodoSubmitStyle = {
        flex : '1'
    }

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const addSingleTodo = (e) => {
        e.preventDefault(); //tranh viec reload lai trang
        if(title !== ''){
           addTodo(title);
           setTitle('');
        }
    }

    return (
        <form style={addTodoStyle} onSubmit={addSingleTodo}>
            <input style={addTodoInputStyle} type="text" name="title" placeholder="Add Todo..." value={title} onChange={changeTitle} />
            <input style={addTodoSubmitStyle} type="submit" value="Submit" />
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc : PropTypes.func.isRequired
}

export default AddTodo;