import React, {useContext, useRef, useState} from "react";
import {TodoContext} from "../store/TodoProvider";

function TodoForm() {
	const [todos, setTodo] = useContext(TodoContext);

	const [title, setTitle] = useState("New Task Title");
	// const [description, setDescription] = useState("Task Description");
	// const [author, setAuthor] = useState("akib Hassan");
	// const [completed, setCompleted] = useState(false);

	const titleRef = useRef();
	const descriptionRef = useRef();
	const authorRef = useRef();
	const completedRef = useRef();

	const updateTitle = (index) => {
		console.log(index);
	
		setTodo((prevTodos) => [...prevTodos, (todos[index].title = titleRef.current.value)]);
		// setTitle(titleRef.current.value);
	};

	// setTitle(titleRef.current.value);
	return (
		<form className='col-md-4 m-auto bg-white p-5 '>
			
				<>
					<div className='mb-3'>
						<label htmlFor='title' className='htmlF-label'>
							Title
						</label>
						<input
							type='text'
							value=''
							className='form-control'
							id={5}
							onChange={() => {
								updateTitle();
							}}
							ref={titleRef}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='description' className='form-label'>
							Description
						</label>
						<textarea value='' className='form-control' id='description' rows='3'></textarea>
					</div>
					<div className='mb-3'>
						<label htmlFor='author' className='htmlF-label'>
							Author
						</label>
						<input type='text' value='' className='form-control' id='author' />
					</div>
					<div className='mb-3 form-check'>
						<input type='checkbox' className='form-check-input' id='complete' value='' />
						<label className='form-check-label' htmlFor='exampleCheck1'>
							Complete
						</label>
					</div>
				</>
		
		</form>
	);
}

export default TodoForm;
