import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { CardInformation } from './components/CardInformation'
import { InfoContext } from './context/InfoContext'

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
    <InfoContext.Provider value = { cardsInfo }>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Page/>
          </Route>
          <Route exact path="/card_info/:id">
            <CardInformation/>
          </Route>
        </Switch>
      </HashRouter>
    </InfoContext.Provider>
  )
}

export default hot(App)