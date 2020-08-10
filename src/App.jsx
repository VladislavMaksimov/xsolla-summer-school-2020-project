import React, {Component, Fragment} from 'react';
import {Counter} from './Counter';

import style from './styles.css';

import logoSrc from './logo.png';

// функциональный компонент
export const Button = ({children, onClick}) => <button onClick={onClick}>{children}</button>

const click = () => console.log('Hello!');

const App = () => (
    <Fragment>
        <div className={style.message}>
            <img className={style.logo} src={logoSrc} />
            Hello Xsolla school!
        </div>
        <Counter/>
    </Fragment> 
)

export default App;