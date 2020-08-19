import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Page } from './components/Page'
import { CardInformation } from './components/CardInformation'
import { InfoContext } from './context/InfoContext'

const App = () => {
  const [card_info, setInfo] = useState({});

  return (
    <InfoContext.Provider value = { {card_info, setInfo} }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page/>
          </Route>
          <Route exact path="/card_info">
            <CardInformation/>
          </Route>
        </Switch>
      </BrowserRouter>
    </InfoContext.Provider>
  )
}

export default hot(App)