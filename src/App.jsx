import { hot } from 'react-hot-loader/root'
import React, {useEffect, useState} from 'react'
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom'

import { Page } from './components/Page'
import { InfoRoutes } from './components/InfoRoutes'
const path = 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json'

const App = () => {
    const [cardsInfo, setInfo] = useState({})

    // Получаем данные из json-файла
    useEffect(() => {
        fetch(path)
            .then(response => response.json())
            .then(response => setInfo(response))
    }, [path])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page/>
        </Route>
        <InfoRoutes cardsInfo={cardsInfo}/>
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
