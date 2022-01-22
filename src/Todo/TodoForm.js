import React, {useContext} from "react";
import TodoContext from "./../store/TodoContext";

function TodoForm() {
	const contextValue = useContext(TodoContext);
	
	const selectedTodo = contextValue?.todo?.todo?.clickedTodo?.selectedTodo;

	// console.log(selectedTodo.title);
	// setTitle(titleRef.current.value);
	return (
		<form className=' bg-white p-2 sticky-top m-3'>
			<>
				<div className='mb-3'>
					<label htmlFor='title' className='htmlF-label'>
						Title
					</label>
					<input
						type='text'
						value={selectedTodo?.title}
						className='form-control'
						id={5}
						onChange={() => {}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<textarea
						value={selectedTodo?.description }
						className='form-control'
						id='description'
						rows='3'></textarea>
				</div>
				<div className='mb-3'>
					<label htmlFor='author' className='htmlF-label'>
						Author
					</label>
					<input type='text' value={ selectedTodo?.author} className='form-control' id='author' />
				</div>
				<div className='mb-3 form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id='complete'
						value={selectedTodo?.complete }
					/>
					<label className='form-check-label' htmlFor='exampleCheck1'>
						Complete
					</label>
				</div>
			</>
		</form>
	);
}

export default TodoForm;
