import {useState} from "react";
import Card from "react-bootstrap/Card";

const radioOptions = [
	{id: "g1", gender: "Male"},
	{id: "g2", gender: "Female"},
	{id: "g3", gender: "others"},
];
const checkOptions = [
	{id: "c1", topic: "css", value: false},
	{id: "c2", topic: "javascript", value: false},
	{id: "c3", topic: "react", value: false},
	{id: "c4", topic: "figma", value: false},
];
const Form = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [checkBox, setCheckBox] = useState([]);
	const [gender, setGender] = useState("");

	const [validForm, setValidForm] = useState(true);

	const nameIsValid = name.trim() !== "";
	const mailIsValid = mail.includes("@");
	const skillIsValid = checkBox.length !== 0;
	const genderIsValid = gender.trim() !== "";

	const nameHandler = (event) => {
		setName(event.target.value);
	};
	const mailHandler = (event) => {
		setMail(event.target.value);
	};
	const checkBoxHandler = (event) => {
		const isChecked = event.target.checked;
		if (isChecked) {
			setCheckBox([...checkBox, event.target.name]);
		} else {
			const index = checkBox.indexOf(event.target.id);
			checkBox.splice(index, 1);
			setCheckBox(checkBox);
		}
	};
	const genderHandler = (event) => {
		setGender(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (!nameIsValid || !mailIsValid) {
			setValidForm(false);
		}
		const person = {
			mail: mail,
			name: name,
			skills: checkBox,
			gender: gender,
		};
		console.log(person);
		// console.log(checkBox);
	};

	return (
		<Card fluid='md' className='mt-3 p-3 shadow p-3 mb-5 bg-body rounded'>
			<form onSubmit={submitHandler} className=' g-9 '>
				<div className='col-md-6 mx-auto'>
					<label htmlFor='mail' className='form-label'>
						Email
					</label>
					<input
						className='form-control'
						id='name'
						type='text'
						placeholder='Email'
						value={mail}
						onChange={mailHandler}
					/>
					{!validForm && !mailIsValid && <div style={{color: "#b40e0e"}}>Email field is required!</div>}
				</div>
				<div className='col-md-6 mx-auto mt-3'>
					<label htmlFor='name' className='form-label'>
						First name
					</label>
					<input
						className='form-control'
						id='name'
						type='text'
						placeholder='Name'
						value={name}
						onChange={nameHandler}
					/>
					{!validForm && !nameIsValid && <div style={{color: "#b40e0e"}}>Name field is required!</div>}
				</div>

				{checkOptions.map((eachCheckbox) => (
					<div key={eachCheckbox.id} className='form-check mx-auto col-md-6  mt-3'>
						<>
							<input
								className='form-check-input'
								type='checkbox'
								value={`${eachCheckbox.value}`}
								id={eachCheckbox.id}
								name={`${eachCheckbox.topic}`}
								onChange={checkBoxHandler}
							/>
							<label className='form-check-label' htmlFor={eachCheckbox.id}>
								{`${eachCheckbox.topic}`}
							</label>
						</>
					</div>
				))}
				{!validForm && !skillIsValid && (
					<div className='col-md-6 mx-auto mt-3' style={{color: "#b40e0e"}}>
						Skills field is required!
					</div>
				)}

				{radioOptions.map((eachRadioBox) => (
					<div key={eachRadioBox.id} className='form-check col-md-6 mx-auto mt-3 '>
						<input
							className='form-check-input'
							type='radio'
							name='inlineRadioOptions'
							id={eachRadioBox.id}
							value={`${eachRadioBox.gender}`}
							onChange={genderHandler}
						/>
						<label className='form-check-label' htmlFor={eachRadioBox.id}>
							{`${eachRadioBox.gender}`}
						</label>
					</div>
				))}

				<div className='col-md-6 mx-auto mt-3'>
					<button className='btn btn-primary '>Submit</button>
				</div>
			</form>
		</Card>
	);
};

export default Form;