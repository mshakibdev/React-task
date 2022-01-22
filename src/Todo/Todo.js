import React, {useContext, useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {TodoContext} from "../store/TodoProvider";

function Todo() {
    const [todos, setTodo] = useContext(TodoContext);
	
	const addTodoHandler = () => {
		setTodo((prevTodos) => [...prevTodos, todos[0]]);
	};
	return (
		<div className='container bg-light d-flex mt-5 border justify-content-between' >
			<TodoList onAddTodo={addTodoHandler} allTodo={todos} />
			<TodoForm />
		</div>
	);
}

export default Todo;
