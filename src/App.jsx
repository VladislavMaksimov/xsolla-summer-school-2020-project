import React, {Component, Fragment} from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

// функциональный компонент
const Button = ({text = "Click me"}) => <button> {text} </button>

const App = () => (
    <Fragment>
        <div className={style.message}>
            <img className={style.logo} src={logoSrc} />
            Hello Xsolla school!
        </div>
        <Button text="Sign in"/>
        <Button text="Sign up"/>
        <Button/>
    </Fragment>
)

export default App;