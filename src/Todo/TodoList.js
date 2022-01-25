import Badge from "react-bootstrap/Badge";
import React, {useContext, useState} from "react";
import TodoContext from "./../store/TodoContext";
import TodoForm from "./TodoForm";

function TodoList(props) {
	const contextValue = useContext(TodoContext);
	// const [title, setTitle] = useState("");

	const [clicked,setClicked] = useState(false);
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
		selectedId === props.todo.id && contextValue.todo.status ? " m-3 border bg-white p-4 border border-success " : "border bg-white p-4 m-2 ";
	const completeCSS = complete ? complete : props.todo.complete;
	const defaultTodo = (
		<div className={cssClass} onClick={todoSelectHandler}>
			<div className='mb-4 '>
				<img onClick={removeTodoHandler} src='https://img.icons8.com/small/24/000000/filled-trash.png' />

				<h6>{title ? title : props.todo.title}</h6>
				<p>{description ? description : props.todo.description}</p>
				<p> Author: {author ? author : props.todo.author}</p>
				<Badge bg={!completeCSS ? "success" : "danger "}>
					<p> Complete: </p>
				</Badge>
			</div>
			<button type='button' className='btn btn-success btn-sm' onClick={addTodoHandler}>
				+Add
			</button>
		</div>
	);
	return (
		<div className="row">
			<div className='col-md-6 d-flex'>
				<div className='bg-light'>{defaultTodo}</div>
			</div>
			<div className='col-md-4  fixed-top ' style={{marginLeft:900 ,marginTop:100}}>
				{selectedId === props.todo.id  ? <TodoForm todo={props.todo} id={props.todo.id} /> : ""}
			</div>
		</div>
	);
}

export default TodoList;

// {selectedId === props.todo.id && contextValue.todo.status ? <TodoForm todo={props.todo} id={props.todo.id} /> : ""}
