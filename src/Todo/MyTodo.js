import React, {useContext, useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoContext from "./../store/TodoContext";

function MyTodo() {
	const contextValue = useContext(TodoContext);
	console.log("cv", contextValue?.todo);
	const newTodo = {
		title: "",
		description: "",
		author: "",
		complete: "",
	};

	const addTodoButtonHandler = () => {
		
		contextValue.todoAddDispatch(newTodo);
	};

	return (
		<div className='container bg-light d-flex  mt-5 border justify-content-between'>
			{contextValue.todo.allTodo.length > 0 ? (
				<div className='col-md-6 d-flex flex-column  px-5 h-60'>
					{contextValue.todo.allTodo.map((eachTodo, index) => (
						<TodoList todo={eachTodo} key={index} id={eachTodo.id} />
					))}
				</div>
			) : (
				<div className='m-auto bg-white p-auto col-md-6 text-center'>
					<button type='button' className=' btn btn-success btn-sm' onClick={addTodoButtonHandler}>
						+Add
					</button>
				</div>
			)}
			<div className='col-md-4 m-auto'>
				<TodoForm />
			</div>
		</div>
	);
}

export default MyTodo;
// // value.map((todo, index) => console.log(todo));
// for (var key in value) {
//     if (value.hasOwnProperty(key)) {
//         console.log(`${key}: ${value[key]}`);
//     }
// }
// value.todo.map((x) => console.log("uh", x));
// for (var key in value.todo) {
//     var obj = value.todo[key];
//     console.log("hey", obj);
//     // ...
// }
// console.log(value);
