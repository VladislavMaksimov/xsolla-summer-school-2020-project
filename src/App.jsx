import React, {Component, Fragment} from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

// функциональный компонент
const Button = () => <button> button </button>

// объявление компонента с помощью класса
class Button1 extends Component {
    render() {
        return <button> button </button>
    }
}

const App = () => (
    <Fragment>
        <div className={style.message}>
            <img className={style.logo} src={logoSrc} />
            Hello Xsolla school!
        </div>
        <Button/>
        <Button1/>
    </Fragment>
)

export default App;