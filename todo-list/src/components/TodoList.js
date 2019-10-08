import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/todoReducer";
import TodoItem from './TodoItem'

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChanges = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      dispatch({type: "ADD_ITEM", payload: todo})
  }

  const toggleComplete = id => {
    dispatch({type: "TOGGLE_COMPLETE", payload: id})
    console.log("Firing dispatch to toggle completed")
  }

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          type="text"
          name="todo"
          value={todo}
          onChange={handleChanges}
        />
        <button>Add Item</button>
      </form>
      <div className='list'>
          {state.map(item => 
            <TodoItem item={item.item} id={item.id} completed={item.completed} toggleComplete={toggleComplete} /> 
          )}
      </div>
    </div>
  );
};

export default TodoList
