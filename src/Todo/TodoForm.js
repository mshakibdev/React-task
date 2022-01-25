import React, {useContext, useState} from "react";
import TodoContext from "./../store/TodoContext";

function TodoForm(props) {
	const contextValue = useContext(TodoContext);
	const selectedId = contextValue?.todo?.todo?.id;
	const [title, setTitle] = useState(props.todo.title);
	const [description, setDescription] = useState(props.todo.description);
	const [author, setAuthor] = useState(props.todo.author);
	const [complete, setComplete] = useState(false);
	

	const titleChangeHandler = (e) => {
		const title = e.target.value;
		setTitle(title);
		const updatedTodo = {
			id: props.id,
			title: title,
			description: description,
			author: author,
			complete: complete,
		};
		contextValue.todoUpdateDispatch(updatedTodo);
	};
	const descriptionChangeHandler = (e) => {
		const description = e.target.value;
		setDescription(description);
		const updatedTodo = {
			id: props.id,
			title: title,
			description: description,
			author: author,
			complete: complete,
		};
		contextValue.todoUpdateDispatch(updatedTodo);
	};
	const authorChangeHandler = (e) => {
		const author = e.target.value;
		setAuthor(author);
		const updatedTodo = {
			id: props.id,
			title: title,
			description: description,
			author: author,
			complete: complete,
		};
		contextValue.todoUpdateDispatch(updatedTodo);
	};

	const completeChangeHandler = () => {
		setComplete(!complete);

		const updatedTodo = {
			id: props.id,
			title: title,
			description: description,
			author: author,
			complete: complete,
		};
		contextValue.todoUpdateDispatch(updatedTodo);
	};
	return (
		<form className=' bg-white d-flex flex-column  border row  '>
			<div className=' col-auto'>
				<label htmlFor='title' className='htmlF-label fs-6'>
					Title
				</label>
				<input value={title} type='text' name='title' className='form-control' id='titleID' onChange={titleChangeHandler} />
			</div>
			<div className='mb-1 col-auto'>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<textarea
					onChange={descriptionChangeHandler}
					value={selectedId === props.todo.id ? description : ""}
					className='form-control'
					id='description'
					name='description'
					rows='3'></textarea>
			</div>
			<div className=' col-auto'>
				<label htmlFor='author' className='htmlF-label'>
					Author
				</label>
				<input type='text' onChange={authorChangeHandler} value={author} className='form-control' id='author' name='author' />
			</div>
			<div className='col-auto form-check'>
				<input type='checkbox' id='complete' name='complete' checked={complete} onChange={completeChangeHandler} />
				<label className='form-check-label ' htmlFor='exampleCheck1'>
					Complete
				</label>
			</div>
		</form>
	);
}

export default TodoForm;
