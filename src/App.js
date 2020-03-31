import React, { Component } from 'react';

import './css/App.css';
import Main from "./Main";
import Header from "./Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
	render() {
	  return (
		<div>
       		<Header />
			<Main />
		</div>
	  );
	}
  }

export default App;
