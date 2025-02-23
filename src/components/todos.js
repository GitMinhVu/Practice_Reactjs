import React, {useState, Fragment} from "react";
import TodoItems from "./todoItems";

const Todos = () => {
    const  [todosState, setTodosState] = useState([{
        id: 1,
        title: "Take out the trash",
        completed: false,
    },
    {
        id: 2,
        title: "Dinner with wife",
        completed: false,
    },
    {
        id: 3,
        title: "Meeting with boss",
        completed: false,
    }]);

    const markComplete = (id) => {
        const newTodo = todosState.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodosState(newTodo);
    }

    const deleteTodo = (id) =>{
        const newTodos = todosState.filter(todo => todo.id !== id);
        setTodosState(newTodos);
    }

    return (
       <Fragment>
        {todosState.map(todo=>{
            return <TodoItems key = {todo.id} todoProps = {todo} markCompleteFunc = {markComplete} deleteTodoFunc = {deleteTodo}/>
        })}
       </Fragment>   
    );
}

export default Todos;