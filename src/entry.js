import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Example from './examples/example-simple';
// to compile styles
import Styles from '../css/app.scss';

ReactDOM.render(
	<Example />
  , document.getElementById('app'));
