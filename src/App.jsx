import React, {Component, Fragment} from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

// функциональный компонент
const Button = ({text = "Click me", children}) => <button> {text}{children} </button>
const FadeText = ({text}) => <div>{text}</div>

const App = () => (
    <Fragment>
        <div className={style.message}>
            <img className={style.logo} src={logoSrc} />
            Hello Xsolla school!
        </div>
        <Button text="Sign in">123</Button>
        <Button text="Sign up"><FadeText text="123"/></Button>
        <Button/>
    </Fragment> 
)

export default App;