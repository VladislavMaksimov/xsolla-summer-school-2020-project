import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './styles.css';

function App1() {
  return React.createElement(
    'div',
    {className: 'app'},
    React.createElement('h1', null, 'Hello world!')
  );
}

render(<App/>, document.getElementById('root'));