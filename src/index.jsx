import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './styles.css';
import {app} from './scss/style.scss';

function App1() {
  return React.createElement(
    'div',
    {className: app},
    React.createElement('h1', null, 'Sass added!')
  );
}

render(<App1/>, document.getElementById('root'));