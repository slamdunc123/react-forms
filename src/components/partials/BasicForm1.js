import React, { Component } from 'react';
import './BasicForm1.scss';

export class BasicForm1 extends Component {
	state = {
		forSubmitted: false,
		firstName: '',
		lastName: '',
		gender: 'male',
		consent: false
	};

	handleOnChange = e => {
		// console.log('handleOnChange fired');
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[e.target.name]: value,
			formSubmitted: false
		});
	};

	handleOnSubmit = e => {
		e.preventDefault();
		this.setState({
			formSubmitted: true
		});
		console.log(this.state);
	};

	render() {
		const { handleOnChange, handleOnSubmit } = this;
		const { formSubmitted, firstName, lastName, gender, consent } = this.state;

		// message to be rendered on form submission
		let message;

		if (!formSubmitted & !consent) {
			message = null;
		}
		if (formSubmitted & consent) {
			message = (
				<div>
					<p>First Name: {firstName}</p>
					<p>Last Name: {lastName}</p>
					<p>Gender: {gender}</p>
					<p>Consent: Yes</p>
				</div>
			);
		}

		return (
			<div>
				<h2>BasicForm1</h2>
				<form onSubmit={handleOnSubmit} className='form-container'>
					<label htmlFor='firstName' className='form-item'>
						<input
							type='text'
							id='firstName'
							name='firstName'
							placeholder='enter first name'
							onChange={handleOnChange}
							required
						/>
					</label>

					<label htmlFor='lastName' className='form-item'>
						<input
							type='text'
							id='lastName'
							name='lastName'
							placeholder='enter last name'
							onChange={handleOnChange}
							required
						/>
					</label>

					<label htmlFor='male' className='form-item'>
						<input
							type='radio'
							id='male'
							checked={gender === 'male'}
							name='gender'
							value='male'
							onChange={handleOnChange}
						/>
						Male
					</label>

					<label htmlFor='female' className='form-item'>
						<input
							type='radio'
							id='female'
							checked={gender === 'female'}
							name='gender'
							value='female'
							onChange={handleOnChange}
						/>
						Female
					</label>

					<label htmlFor='consent' className='form-item'>
						<input
							type='checkbox'
							id='consent'
							name='consent'
							checked={consent}
							onChange={handleOnChange}
						/>
						Please consent
					</label>

					{consent ? <button>Submit</button> : <button disabled>Submit</button>}
				</form>

				{message}
			</div>
		);
	}
}

export default BasicForm1;
