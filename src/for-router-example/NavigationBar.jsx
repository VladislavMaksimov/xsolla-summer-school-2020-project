import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Fragment>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/items">Items</NavLink>
      </div>
    </Fragment>
  );
};

export default NavigationBar;
