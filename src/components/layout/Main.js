import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Forms from '../pages/Forms';
import FormikYupBootstrapForm from '../pages/FormikYupBootstrapForm';
import FormikMultiStep from '../pages/FormikMultiStep';

const Main = () => {
	return (
		<Switch>
			<Route path='/basic-forms'>
				<Forms />
			</Route>
			<Route path='/formik-yup'>
				<FormikYupBootstrapForm />
			</Route>
			<Route path='/formik-multi-step'>
				<FormikMultiStep />
			</Route>
		</Switch>
	);
};

export default Main;
