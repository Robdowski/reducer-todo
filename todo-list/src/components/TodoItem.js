import React, { useReducer } from 'react'
import { initialState, reducer } from "../reducers/todoReducer";

export default function TodoItem(props) {
    console.log("props for todo item", props)

    return (
        <div onClick={() => props.toggleComplete(props.id)}>
           <h3 className={props.completed === true ? "done" : "todo"}>{props.item}</h3>
        </div>
    )
}
