// Expose jQuery and Bootstrap JS
require('expose?$!expose?jQuery!jquery');
require("bootstrap/dist/js/bootstrap.min.js");

import React from 'react';
import { Component } from 'react';


export default class App extends Component {
  render() {
    return (
		<div className="alert alert-info margin-top">
			<h1 className="text-center">
				React Redux Starter
				<br/>
				<small>Edit <strong>src/app.js</strong> to replace this message!</small>
			</h1>
		</div>
    );
  }
}
