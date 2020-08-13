import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Page } from './components/Page'
import { CardInformation } from './components/CardInformation'

const App = () => {
  return (
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
  )
}

export default hot(App)