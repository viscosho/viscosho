import React, { Component } from 'react';
import './App.css';
import Body from './components/body'
import Sidebar from './components/sidebar';

class App extends Component {
	render() {
	  return (
		<div className="App">
			<Sidebar></Sidebar>
			<Body></Body>
		</div>
		);
	}
}

export default App;
