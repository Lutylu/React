import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './composants/Header.js'

class App extends Component {
	render() {
		return (
			<div className="App">
			<div>
			<Header />
			</div>
			</div>
			);
	}
}

export default App;
