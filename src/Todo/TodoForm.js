import React from "react";

function TodoForm() {
	return (
		<div className='container-fluid d-flex  pb-5 border'>
			<div className='col-md-8 m-auto bg-light '>
				<div className='p-5 '>Hello</div>
			</div>
			<form className='col-md-4 m-auto p-5 bg-white'>
				<div className='mb-3'>
					<label htmlFor='title' className='htmlF-label'>
						Title
					</label>
					<input type='text' className='form-control' id='title' />
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<textarea className='form-control' id='description' rows='3'></textarea>
				</div>
				<div className='mb-3'>
					<label htmlFor='author' className='htmlF-label'>
						Author
					</label>
					<input type='text' className='form-control' id='author' />
				</div>
				<div className='mb-3 form-check'>
					<input type='checkbox' className='form-check-input' id='complete' />
					<label className='form-check-label' htmlFor='exampleCheck1'>
						Complete
					</label>
				</div>
			</form>
		</div>
	);
}

export default TodoForm;
