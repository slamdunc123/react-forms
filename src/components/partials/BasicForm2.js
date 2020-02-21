import React, { Component } from 'react';
import './BasicForm2.scss';

export class BasicForm2 extends Component {
	state = {
		formSubmitted: false,
		title: '',
		description: '',
		image: '',
		consent: false
	};

	handleOnChange = e => {
		// console.log('handleOnChange fired');
		// const value =
		// 	e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		let value;
		if (e.target.type === 'checkbox') {
			value = e.target.checked;
		} else if (e.target.type === 'file') {
			value = e.target.files;
		} else {
			value = e.target.value;
		}

		this.setState({
			[e.target.name]: value,
			formSubmitted: false
		});
	};

	handleOnSubmit = e => {
		e.preventDefault();
		console.log(e);
		console.log(this.state);
		this.setState({
			formSubmitted: true
		});
	};

	render() {
		const { handleOnChange, handleOnSubmit } = this;
		const { formSubmitted, title, description, image, consent } = this.state;

		// message to be rendered on form submission
		let message;

		if (formSubmitted) {
			message = (
				<div className='form-submission'>
					<p>
						Title: <b>{title}</b>
					</p>
					<p>
						Description: <b>{description}</b>
					</p>
					<p>
						Image: <b>{image[0].name}</b>
					</p>
				</div>
			);
		}

		return (
			<>
				<h2>BasicForm2</h2>
				<form onSubmit={handleOnSubmit} className='form-container'>
					<div className='form-item'>
						<label htmlFor='title'></label>
						<input
							className='text-input'
							type='text'
							id='title'
							name='title'
							placeholder='enter title'
							onChange={handleOnChange}
						/>
					</div>
					<div className='form-item'>
						<label htmlFor='description'></label>
						<textarea
							className='text-input'
							type='text'
							id='description'
							name='description'
							placeholder='enter description'
							onChange={handleOnChange}
							rows='4'
						/>
					</div>
					<div className='form-item'>
						<label htmlFor='image'></label>
						<input
							className='text-input'
							type='file'
							id='image'
							name='image'
							onChange={handleOnChange}
						/>
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
						{consent ? (
							<button>Submit</button>
						) : (
							<button disabled>Submit</button>
						)}
					</div>
				</form>
				{message}
			</>
		);
	}
}

export default BasicForm2;
