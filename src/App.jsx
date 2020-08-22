import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { InfoProvider } from './context/InfoContext'
import { InfoRoutes } from './components/InfoRoutes'

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

const App = () => {
  const [cardsInfo, setInfo] = useState({});

  // Получаем данные из json-файла
  useEffect(() => {
    fetch(path)
        .then(response => response.json())
        .then(response => setInfo(response))
    }, [path]);

  return (
    <InfoProvider info = { cardsInfo }>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Page/>
          </Route>
          <InfoRoutes/>
        </Switch>
      </HashRouter>
    </InfoProvider>
  )
}

export default hot(App)