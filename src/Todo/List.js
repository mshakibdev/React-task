import React, {useContext} from "react";
import Badge from "react-bootstrap/Badge";
import TodoContext from "../store/TodoContext";

function List() {
	const todoCtx = useContext(TodoContext);
	const Todo = () => {
		return <></>;
	};

	const addTodoListHandler = () => {
		const s = Todo();
		console.log(s);
	};

	return (
		<>
			<div className='col-md-8 d-flex flex-column  '>
				<div className='m-5 bg-white px-5 py-2'>
					<h3>{todoCtx.title}</h3>
					<p>{todoCtx.description}</p>
					<p> Author: {todoCtx.author}</p>

					<Badge bg='danger'>Completed</Badge>
				</div>

				{/* {todoCtx.map((todo, index) => (
					<div className='m-5 bg-white px-5 py-2'>
						<h3>{todo.title}</h3>
						<p>{todo.description}</p>
						<p> Author: {todo.author}</p>

						<Badge bg='danger'>Completed</Badge>
					</div>)
				)} */}
				<button type='button' onClick={addTodoListHandler} className='mx-auto btn btn-success btn-sm'>
					+Add
				</button>
				<div className='m-5 bg-white px-5 py-2'>
					<h3>New Task tile</h3>
					<p>task description</p>
					<p> Author: Shakib</p>

					<Badge bg='success'>Completed</Badge>
				</div>
			</div>
		</>
	);
}

export default List;


// const [title, setTitle] = useState("New Task Title");
// const [description, setDescription] = useState("Task Description");
// const [author, setAuthor] = useState("akib Hassan");
// const [completed, setCompleted] = useState(false);
// const [clicked, setClicked] = useState(false);
// const newTodo = {
// 	title: title,
// 	description: description,
// 	author: author,
// 	complete: completed,
// };
