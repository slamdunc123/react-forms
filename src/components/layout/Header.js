import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Link to='/basic-forms'>Basic Forms</Link>
			<Link to='/formik-yup'>Formik Yup</Link>
			<Link to='/formik-multi-step'>Formik Multi</Link>
		</>
	);
};

export default Header;
