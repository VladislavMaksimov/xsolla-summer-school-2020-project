import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { InfoRoutes } from './components/InfoRoutes'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Page/>
        </Route>
        <InfoRoutes/>
      </Switch>
    </HashRouter>
  )
}

export default hot(App)
