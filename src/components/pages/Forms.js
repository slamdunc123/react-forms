import React, { useState } from 'react';

// partials
import BasicForm1 from '../partials/BasicForm1';
import BasicForm2 from '../partials/BasicForm2';

const Forms = () => {
	// const [toggleForm, setToggleForm] = useState(true);
	const [form, setForm] = useState(null);

	// const toggleSwitchForm = () => {
	// setToggleForm(!toggleForm);
	// };

	const renderForm = formNum => {
		switch (formNum) {
			case 1:
				setForm(<BasicForm1 />);
				break;
			case 2:
				setForm(<BasicForm2 />);
				break;
			default:
				return <h3>No Form</h3>;
		}
	};
	return (
		<>
			{/* <button onClick={toggleSwitchForm}>Toggle Form</button>
			{toggleForm ? <BasicForm1 /> : <BasicForm2 />} */}
			<button onClick={() => renderForm(1)}>BasicForm1</button>
			<button onClick={() => renderForm(2)}>BasicForm2</button>
			{form}
		</>
	);
};

export default Forms;
