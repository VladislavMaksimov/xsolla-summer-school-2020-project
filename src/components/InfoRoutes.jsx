import React from 'react'
import { CardInformation } from './CardInformation'
import { Route } from 'react-router-dom'

export const InfoRoutes = ({cardsInfo}) => {
  return (Object.values(cardsInfo).map((card) => {
    return (
      <Route exact path={`/card_info/${card.id}`} key={card.id}>
        <CardInformation name={card.name} city={card.city} date={card.date} genre={card.genre} image={card.image}/>
      </Route>
    )
  }))
}
