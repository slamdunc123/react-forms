import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './formConfig';

const FormikYupBootstrapForm = () => {
	const handleOnSubmit = (fields) => {
		// alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));

		console.log('handleOnSubmit -> fields', fields);
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(fields) => handleOnSubmit(fields)}
			render={({ errors, status, touched }) => (
				<Form>
					<div className='form-group'>
						<label htmlFor='firstName'>First Name</label>
						<Field
							name='firstName'
							type='text'
							className={
								'form-control' +
								(errors.firstName && touched.firstName
									? ' is-invalid'
									: '')
							}
						/>
						<ErrorMessage
							name='firstName'
							component='div'
							className='invalid-feedback'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='lastName'>Last Name</label>
						<Field
							name='lastName'
							type='text'
							className={
								'form-control' +
								(errors.lastName && touched.lastName
									? ' is-invalid'
									: '')
							}
						/>
						<ErrorMessage
							name='lastName'
							component='div'
							className='invalid-feedback'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<Field
							name='email'
							type='text'
							className={
								'form-control' +
								(errors.email && touched.email
									? ' is-invalid'
									: '')
							}
						/>
						<ErrorMessage
							name='email'
							component='div'
							className='invalid-feedback'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<Field
							name='password'
							type='password'
							className={
								'form-control' +
								(errors.password && touched.password
									? ' is-invalid'
									: '')
							}
						/>
						<ErrorMessage
							name='password'
							component='div'
							className='invalid-feedback'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='confirmPassword'>
							Confirm Password
						</label>
						<Field
							name='confirmPassword'
							type='password'
							className={
								'form-control' +
								(errors.confirmPassword &&
								touched.confirmPassword
									? ' is-invalid'
									: '')
							}
						/>
						<ErrorMessage
							name='confirmPassword'
							component='div'
							className='invalid-feedback'
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary mr-2'>
							Register
						</button>
						<button type='reset' className='btn btn-secondary'>
							Reset
						</button>
					</div>
				</Form>
			)}
		/>
	);
};

export default FormikYupBootstrapForm;
