import React, {useState, useContext} from "react";
import {TodoContext} from "../store/TodoProvider";
import Badge from "react-bootstrap/Badge";

function AddTodo() {
	const [todos, setTodo] = useContext(TodoContext);

	const [title, setTitle] = useState("New Task Title");
	const [description, setDescription] = useState("Task Description");
	const [author, setAuthor] = useState("Shakib Hassan");
	const [completed, setCompleted] = useState(false);

	const newTodo = {
		title: title,
		description: description,
		author: author,
		complete: completed,
	};
	setTodo((prevTodos) => [...prevTodos, newTodo]);

	return (
		<>
			{todos.map((todo, index) => (
				<div className='m-5 bg-white px-5 py-2' key={todo.index}>
					<h3>{todo.title}</h3>
					<p>{todo.description}</p>
					<p> Author: {todo.author}</p>

					<Badge bg='danger'>Completed</Badge>
				</div>
			))}
		</>
	);
}

export default AddTodo;
