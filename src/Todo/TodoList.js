import Badge from "react-bootstrap/Badge";
import React, {useContext} from "react";
import TodoForm from "./TodoForm";

import TodoContext from "./../store/TodoContext";

function TodoList(props) {
	const contextValue = useContext(TodoContext);
	const newTodo = {
		title: props.todo.title,
		description: props.todo.description,
		author: props.todo.author,
		complete: props.todo.complete,
	};
	const addTodoHandler = () => {
		contextValue.todoAddDispatch(newTodo);
	};

	const removeTodoHandler = () => {
		// console.log("removeId", newTodo.id);
		contextValue.todoRemoveDispatch(props.id);
	};


	const todoSelectHandler = () => {
		const selectedTodo = {
			id: props.id,
			title: props.todo.title,
			description: props.todo.description,
			author: props.todo.author,
			complete: props.todo.complete,
		};
		contextValue.todoSelectDispatch(selectedTodo);
	};

	const defaultTodo = (
		<div className='border bg-white p-4'>
			<div className='mb-4 ' onClick={todoSelectHandler}>
				<Badge onClick={removeTodoHandler} bg='danger'>
					Delete
				</Badge>

				<h6>{props.todo.title}</h6>
				<p>{props.todo.description}</p>
				<p> Author: {props.todo.author}</p>

				<Badge bg='danger'>Completed</Badge>
			</div>
			<button type='button' className='mx-auto btn btn-success btn-sm' onClick={addTodoHandler}>
				+Add
			</button>
		</div>
	);
	return (
		<>
			<div className='m-3 '>
				{defaultTodo}

				{/* <div className='m-5 bg-white px-5 py-2'>
					<h3>New Task tile</h3>
					<p>task description</p>
					<p> Author: Shakib</p>

					<Badge bg='success'>Completed</Badge>
				</div> */}
			</div>
		</>
	);
}

export default TodoList;
