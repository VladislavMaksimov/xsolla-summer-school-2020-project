import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { InfoRoutes } from './components/InfoRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page/>
        </Route>
        <InfoRoutes/>
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
