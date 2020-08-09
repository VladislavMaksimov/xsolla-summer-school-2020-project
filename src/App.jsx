import React from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

const flag = false;

const App = () => (
    <div className={style.message}>
        <img className={style.logo} src={logoSrc} />
        Hello Xsolla school!
        {console.dir("hello world!")}
        {flag && <h2>Xsolla</h2>}
        {alert(123)}
    </div>
)

export default App;