import Badge from "react-bootstrap/Badge";
import React, {useContext, useState} from "react";
import TodoContext from "./../store/TodoContext";

function TodoList(props) {
	const contextValue = useContext(TodoContext);
	const [title, setTitle] = useState("");

	const [clicked, setClicked] = useState(false);
	const description = contextValue?.todo?.todo?.updatedTodo?.description;
	const author = contextValue?.todo?.todo?.updatedTodo?.author;
	const complete = contextValue?.todo?.todo?.updatedTodo?.complete;
	const todo = {
		id: props.id,
		title: props.todo.title,
		description: props.todo.description,
		author: props.todo.author,
		complete: props.todo.complete,
	};
	const addTodoHandler = () => {
		setTitle("New Task tilte");
		contextValue.todoAddDispatch(todo);
		contextValue.todoSelectDispatch(todo);
	};

	const removeTodoHandler = () => {
		contextValue.todoRemoveDispatch(props.id);
	};

	const todoSelectHandler = () => {
		setClicked(true);
		const id = props.id;
		const showForm = clicked;
		contextValue.todoSelectDispatch(id, showForm);
	};
	const selectedId = contextValue?.todo?.todo?.id;

	const cssClass = (selectedId ===  props.todo.id) && contextValue.todo.status ? " m-3 border bg-white p-4 border border-success " : "border bg-white p-4 m-2 ";
	const completeCSS = props.todo.complete ? props.todo.complete : complete;
	const defaultTodo = (
		<div className={cssClass} onClick={todoSelectHandler}>
			<div className='mb-4 '>
				<img  onClick={removeTodoHandler} src='https://img.icons8.com/small/24/000000/filled-trash.png' />

				<h6>{title ? title : props.todo.title}</h6>
				<p>{description ? description : props.todo.description}</p>
				<p> Author: {author ? author : props.todo.author}</p>

				<Badge bg={!completeCSS ? "danger" : " success"}>
					<p> Complete: </p>
				</Badge>
			</div>
			<button type='button' className='btn btn-success btn-sm' onClick={addTodoHandler}>
				+Add
			</button>
		</div>
	);
	return (
		<>
			<div className='bg-light'>
				{defaultTodo}
			</div>
		</>
	);
}

export default TodoList;
