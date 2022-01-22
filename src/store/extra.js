import {useReducer} from "react";

import TodoContext from "./TodoContext";

const defaultTodoState = {
	title: "New Task Title",
	description: "Task Description",
	author: "Shakib Hassan",
	complete: false,
};

const todoReducer = (state, action) => {
	if (action.type === "ADD") {
		const title = state.todo.title;
		const description = action.todo.description;
		const author = action.todo.author;
		const complete = action.todo.complete;
		console.log(state);
		return <div>Hello</div>;
		// return {
		// 	title: title,
		// 	description: description,
		// 	author: author,
		// 	complete: complete,
		// };
	}
	return defaultTodoState;
};

function TodoProvider(props) {
	const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

	const addTodoHandler = (todo) => {
		const action = {type: "ADD", todo: todo};
		dispatchTodoAction(action);
	};

	const todoContext = {
		title: todoState.title,
		description: todoState.description,
		author: todoState.author,
		complete: todoState.complete,
		addTodo: addTodoHandler,
	};
	return <TodoContext.Provider value={todoContext}>{props.children}</TodoContext.Provider>;
}

export default TodoProvider;
