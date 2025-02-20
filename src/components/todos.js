import React, {useState, Fragment} from "react";
import TodoItems from "./todoItems";

const Todos = () => {
    const  [todosState, setTodosState] = useState(['Viec 1', 'Viec 2', 'Viec 3']);

    return (
       <Fragment>
        {todosState.map(todo=>{
            return <TodoItems todoProps = {todo}/>
        })}
       </Fragment>   
    );
}

export default Todos;