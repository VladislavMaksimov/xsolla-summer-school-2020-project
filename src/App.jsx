import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Page } from './components/Page'
import { CardInformation } from './components/CardInformation'
import { InfoContext } from './context/InfoContext'

const App = () => {
  return (
    <InfoContext.Provider value = "Srry, no info">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page/>
          </Route>
          <Route exact path="/test">
            <CardInformation/>
          </Route>
        </Switch>
      </BrowserRouter>
    </InfoContext.Provider>
  )
}

export default hot(App)