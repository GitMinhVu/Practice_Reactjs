import React, {Fragment} from "react";

const TodoItems = (props) => {
    console.log(props);
    return (
        <Fragment>
            <p>
                {props.todoProps}
            </p>
        </Fragment>
    );
}

export default TodoItems;