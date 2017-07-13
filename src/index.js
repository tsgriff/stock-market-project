import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';
import Home from "./components/Home/home";

ReactDOM.render(
	<Provider store={store}>
	<Home />
	</Provider>,
	document.getElementById( 'root' )
);
