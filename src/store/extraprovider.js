import {useReducer} from "react";

import TodoContext from "./TodoContext";

const defaultTodoState = {
	allTodo: [],
	todo: {title: "New Task tilte", description: "title Description", author: "Shakib", complete: false},
};

const todoReducer = (state, action) => {
	if (action.type === "ADD-TODO") {
		console.log("add-state", state.allTodo);

		let id = Math.random().toString(16).slice(2);
		if (state.allTodo.length === 0) {
			action.newTodo = {
				title: "New Task tilte",
				description: "title Description",
				author: "Shakib",
				complete: false,
			};
		}
		action.newTodo = {...action.newTodo, id};
		const newState = [...state, action.newTodo];

		return newState;
	}
	if (action.type === "REMOVE-TODO") {
		const filteredState = state.filter((stateTodo) => stateTodo.id !== action.id);
		console.log("state...", filteredState);
		return filteredState;
	}
	if (action.type === "SELECT-TODO") {
		console.log("selected dispatch");
		const newState = [...state];

		return newState;
	}
	return defaultTodoState;
};

function TodoProviders(props) {
	const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

	const addTodo = (newTodo) => {
		const action = {type: "ADD-TODO", newTodo};
		dispatchTodoAction(action);
	};
	const removeTodo = (id) => {
		const action = {type: "REMOVE-TODO", id};
		dispatchTodoAction(action);
	};
	const selectTodo = (id) => {
		const action = {type: "SELECT-TODO", id};
		dispatchTodoAction(action);
	};
	const contextValue = {
		todo: todoState,
		todoAddDispatch: addTodo,
		todoRemoveDispatch: removeTodo,
		todoSelectDispatch: selectTodo,
	};
	return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>;
}

export default TodoProviders;
