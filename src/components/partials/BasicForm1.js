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
				<div className='form-submission'>
					<p>
						First Name: <b>{firstName}</b>
					</p>
					<p>
						Last Name: <b>{lastName}</b>
					</p>
					<p>
						Gender: <b>{gender}</b>
					</p>
					<p>
						Consent: <b>yes</b>
					</p>
				</div>
			);
		}

		return (
			<>
				<h2>BasicForm1</h2>
				<form onSubmit={handleOnSubmit} className='form-container'>
					<div className='form-item'>
						<label htmlFor='firstName'></label>
						<input
							className='text-input'
							type='text'
							id='firstName'
							name='firstName'
							placeholder='enter first name'
							onChange={handleOnChange}
							required
						/>
					</div>
					<div className='form-item'>
						<label htmlFor='lastName'></label>
						<input
							className='text-input'
							type='text'
							id='lastName'
							name='lastName'
							placeholder='enter last name'
							onChange={handleOnChange}
							required
						/>
					</div>
					<div className='form-item'>
						<label htmlFor='male'>
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
					</div>
					<div className='form-item'>
						<label htmlFor='female'>
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
					</div>
					<div className='form-item'>
						<label htmlFor='consent'>
							<input
								type='checkbox'
								id='consent'
								name='consent'
								checked={consent}
								onChange={handleOnChange}
							/>
							Please consent
						</label>
					</div>
					<div className='form-item'>
						{consent ? <button>Submit</button> : <button disabled>Submit</button>}
					</div>
				</form>
				{message}
			</>
		);
	}
}

export default BasicForm1;
