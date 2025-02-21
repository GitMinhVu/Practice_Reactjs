import React, {useState, Fragment} from "react";
import TodoItems from "./todoItems";

const Todos = () => {
    const  [todosState, setTodosState] = useState([{
        // id: 1,
        title: "Take out the trash",
        completed: true,
    },
    {
        // id: 2,
        title: "Dinner with wife",
        completed: false,
    },
    {
        // id: 3,
        title: "Meeting with boss",
        completed: false,
    }]);

    return (
       <Fragment>
        {todosState.map(todo=>{
            return <TodoItems todoProps = {todo}/>
        })}
       </Fragment>   
    );
}

export default Todos;