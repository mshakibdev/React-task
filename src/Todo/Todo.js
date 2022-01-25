import React, {useContext, useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoContext from "./../store/TodoContext";

function MyTodo() {
	const contextValue = useContext(TodoContext);

	const addTodoButtonHandler = () => {
		contextValue.todoAddDispatch();
	};
	const selectedId = contextValue?.todo?.todo?.id;
	// const confirm = selectedId === props.id;
	console.log("cv", contextValue);
	const filterForm = contextValue.todo.allTodo.filter((todo) => todo?.id === contextValue?.todo?.todo?.id && contextValue.todo.status);
	console.log("FF", filterForm);

	return (
		<div>
			{contextValue.todo.allTodo.length > 0 ? (
				contextValue.todo.allTodo.map((eachTodo, index) => <TodoList todo={eachTodo} key={index} id={eachTodo.id} />)
			) : (
				<div className='m-auto bg-white p-auto col-md-6 text-center'>
					<button type='button' className=' btn btn-success btn-sm' onClick={addTodoButtonHandler}>
						+Add
					</button>
				</div>
			)}
		</div>
	);
}

export default MyTodo;


