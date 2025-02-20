import React, {useState} from "react";

const Todos = () => {

    const  [todosState, setTodosState] = useState(['Viec 1', 'Viec 2', 'Viec 3']);

    // for (let i =0; i < todosState.length; i++) {
    //     allTodos.push(<li key={i}>{todosState[i]}</li>);
    // }

    return (
        <section>
            <h2>My Todos</h2>
            <ul>
                {todosState.map((todo, index)=>{
                    return <li key={index}>{todo}</li>
                })}             
            </ul>
        </section>
    );
}

export default Todos;