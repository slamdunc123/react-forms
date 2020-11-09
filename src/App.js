import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

// layout
import Main from './components/layout/Main';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Main />
			</Router>
		</div>
	);
}

export default App;
