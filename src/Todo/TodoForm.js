import React, {useContext, useState, useEffect} from "react";
import TodoContext from "./../store/TodoContext";

function TodoForm(props) {
	const contextValue = useContext(TodoContext);
	console.log("FORM--", contextValue?.todo?.todo?.id);
	const selectedId = contextValue?.todo?.todo?.id;
	// const selectedTodo = contextValue?.todo?.todo?.clickedTodo;
	// const [description, setDescription] = useState(selectedTodo?.description);

	const [title, setTitle] = useState(props.todo.title);
	const [description, setDescription] = useState(props.todo.description);
	const [author, setAuthor] = useState(props.todo.author);
	const [complete, setComplete] = useState(false);
	// const [title, setTitle] = useState("");

	// contextValue.todoUpdateDispatch(updatedTodo);

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
		console.log(("complete---", complete));
		contextValue.todoUpdateDispatch(updatedTodo);
	};
	return (
		<form className=' bg-white p-2  m-3 border'>
			<div className='mb-3'>
				<label htmlFor='title' className='htmlF-label'>
					Title
				</label>
				<input value={title} type='text' name='title' className='form-control' id='titleID' onChange={titleChangeHandler} />
			</div>
			<div className='mb-3'>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<textarea
					onChange={descriptionChangeHandler}
					value={selectedId === props.todo.id ? description:""}
					className='form-control'
					id='description'
					name='description'
					rows='3'></textarea>
			</div>
			<div className='mb-3'>
				<label htmlFor='author' className='htmlF-label'>
					Author
				</label>
				<input type='text' onChange={authorChangeHandler} value={author} className='form-control' id='author' name='author' />
			</div>
			<div className='mb-3 form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='complete'
					name='complete'
					checked={complete}
				
					onChange={completeChangeHandler}
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Complete
				</label>
			</div>
		</form>
	) 
}

export default TodoForm;
