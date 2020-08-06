import React from 'react';

import style from './styles.css';

import logoSrc from './logo.png';

const App = () => (
    <div className={style.message}>
        <img className={style.logo} src={logoSrc} />
        Hello Xsolla school!
    </div>
)

export default App;