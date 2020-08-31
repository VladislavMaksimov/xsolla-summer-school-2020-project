import React from 'react'
import {CardsList} from "./CardsList";
import { page } from '../scss/style.scss'
import {CardsConsumer} from "../context";

export const Page = () => {
  return (
      <CardsConsumer>
          {({ cards }) => (
            <div className={page}>
              <h2> Event Listing </h2>
              <CardsList cardsCollection={cards}/>
            </div>)}
      </CardsConsumer>
  )
}