import {useState} from "react";

import {createContext} from "react";

export const TodoContext = createContext();

export const defaultTodo = [
	{
		title: "New Task Title",
		description: "Task Description",
		author: "Shakib Hassan",
		complete: false,
	},
];

function TodoProvider(props) {
	const [todos, setTodo] = useState(defaultTodo);

	return <TodoContext.Provider value={[todos, setTodo]}>{props.children}</TodoContext.Provider>;
}

export default TodoProvider;
