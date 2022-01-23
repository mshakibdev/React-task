import {useReducer} from "react";

import TodoContext from "./TodoContext";

const defaultTodoState = {
	allTodo: [],
	todo: {id: "", title: "", description: "", author: "", complete: false},
};

const todoReducer = (state, action) => {
	if (action.type === "ADD-TODO") {
		action.newTodo = {
			id: Math.random().toString(16).slice(2),
			title: "New Task tilte",
			description: "title Description",
			author: "Shakib",
			complete: false,
		};

		const newState = {allTodo: [...state.allTodo, action.newTodo], todo: action.newTodo};
		return newState;
	}
	if (action.type === "REMOVE-TODO") {
		const filteredState = state.allTodo.filter((stateTodo) => stateTodo.id !== action.id);
		const newState = {allTodo: filteredState, todo: {}};

		return newState;
	}
	if (action.type === "SELECT-TODO") {
		const clickedTodo = action.selectedTodo;

		const newState = {allTodo: [...state.allTodo], todo: {clickedTodo}};
		localStorage.setItem("selectedId", action?.selectedTodo?.id);
		localStorage.setItem("selectedTodo", action?.selectedTodo);

		return newState;
	}
	if (action.type === "UPDATE-TODO") {
		let updatedTodo;
		const updatedTodoList = [...state.allTodo];
		const index = state.allTodo.findIndex((todo) => todo.id === action.updatedTodo.id);

		updatedTodo = updatedTodoList[index];

		updatedTodo = {
			id: action.updatedTodo.id,
			title: action.updatedTodo,
			description: "action.updatedTodo.description",
			author: "action.updatedTodo.author",
			complete: "action.updatedTodo.complete",
		};
		updatedTodoList[index] = updatedTodo;

		const newState = {allTodo: [...state.allTodo], todo: {updatedTodo}};

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
	const selectTodo = (selectedTodo) => {
		const action = {type: "SELECT-TODO", selectedTodo};
		dispatchTodoAction(action);
	};
	const updateTodo = (updatedTodo) => {
		const action = {type: "UPDATE-TODO", updatedTodo};
		dispatchTodoAction(action);
	};
	const contextValue = {
		todo: todoState,
		todoAddDispatch: addTodo,
		todoRemoveDispatch: removeTodo,
		todoSelectDispatch: selectTodo,
		todoUpdateDispatch: updateTodo,
	};
	return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>;
}

export default TodoProviders;
