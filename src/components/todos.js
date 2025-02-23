import React, {useState, Fragment, useEffect} from "react";
import TodoItems from "./todoItems";
import AddTodo from "./addTodo";
import axios from "axios";

import { v4 as uuid4 } from 'uuid';

const Todos = () => {
    const  [todosState, setTodosState] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getTodos()
    }, [])

    const markComplete = (id) => {
        const newTodo = todosState.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodosState(newTodo);
    }

    const deleteTodo = async (id) =>{
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const newTodo = todosState.filter(todo => todo.id !== id);
            setTodosState(newTodo);
        }catch (error) {
            console.log(error)
    }
}
    const addTodo = async (title) => {
    //    const newTodo = {
    //     id: todosState.length + 1,
    //     title: title,
    //     completed: false,
    //    }
    //      setTodosState([...todosState, newTodo]);
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        }
    )
    const newTodo = [...todosState, res.data]
    setTodosState(newTodo)
    } catch (error) {
        console.log(error)
    }
    }

    return (
       <Fragment>
        <AddTodo addTodoFunc = {addTodo}/>
        {todosState.map(todo=>{
            return <TodoItems key = {todo.id} todoProps = {todo} markCompleteFunc = {markComplete} deleteTodoFunc = {deleteTodo}/>
        })}
       </Fragment>   
    );
}

export default Todos;