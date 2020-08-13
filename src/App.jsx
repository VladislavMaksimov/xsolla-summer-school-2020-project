import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import { page } from './scss/style.scss'
import { CardsContainer } from './components/CardsContainer'

const App = () => {
  return (
    <div className={page}>
      <CardsContainer/>
    </div>
  )
}
export default hot(App)
