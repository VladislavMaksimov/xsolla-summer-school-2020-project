import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { InfoProvider } from './context/InfoContext'
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