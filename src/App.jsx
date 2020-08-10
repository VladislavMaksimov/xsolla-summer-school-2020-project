import React, {Component, Fragment} from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

// функциональный компонент
const Button = ({text = "Click me", children, onClick}) => <button onClick={onClick}>{text}{children}</button>

const click = () => console.log('Hello!');

const App = () => (
    <Fragment>
        <div className={style.message}>
            <img className={style.logo} src={logoSrc} />
            Hello Xsolla school!
        </div>
        <Button text="Sign in" onClick={click}/>
        <Button/>
    </Fragment> 
)

export default App;