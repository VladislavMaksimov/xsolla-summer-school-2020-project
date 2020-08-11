import { hot } from 'react-hot-loader/root';
import React, {Fragment} from 'react';
import {app} from './scss/style.scss';

const App = () => {
  return(
    <Fragment>
      <h1 className={app}>Sass added!</h1>
      <input placeholder="Hot!"></input>
    </Fragment>
  );
};
export default hot(App);
