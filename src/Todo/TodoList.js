import Badge from "react-bootstrap/Badge";
import React, {useContext, useState} from "react";
import TodoContext from "./../store/TodoContext";
import TodoForm from "./TodoForm";

function TodoList(props) {
	const contextValue = useContext(TodoContext);

	const [clicked, setClicked] = useState(false);
	const title = contextValue?.todo?.todo?.updatedTodo?.title;
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
		// setTitle("New Task title");
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

	const cssClass =
		selectedId === props.todo.id && contextValue.todo.status ? " m-2 border bg-white p-2 border border-success " : "border bg-white p-2 m-2 ";
	const completeCSS = complete ? complete : props.todo.complete;
	const defaultTodo = (
		<div className={cssClass} onClick={todoSelectHandler}>
			<div className='mb-4 '>
				<div className='d-flex flex-row-reverse'>
					<img onClick={removeTodoHandler} src='https://img.icons8.com/small/24/000000/filled-trash.png' />
				</div>
				<h6>{title ? title : props.todo.title}</h6>
				<p>{description ? description : props.todo.description}</p>
				<p> Author: {author ? author : props.todo.author}</p>
				<Badge bg={completeCSS ? "danger" : "success "}>Complete</Badge>
			</div>
			<button type='button' className='btn btn-success btn-sm' onClick={addTodoHandler}>
				+Add
			</button>
		</div>
	);
	return (
		<div className='col-md-8 bg-light border'>
			<div className='bg-light '>{defaultTodo}</div>
			<div className='col' style={{position: "absolute", top: 120, right: 250}}>
				{selectedId === props.todo.id ? <TodoForm todo={props.todo} id={props.todo.id} /> : ""}

				<div></div>
			</div>
		</div>
	);
}

export default TodoList;

// {selectedId === props.todo.id && contextValue.todo.status ? <TodoForm todo={props.todo} id={props.todo.id} /> : ""}
