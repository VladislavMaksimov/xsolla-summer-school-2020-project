import React from 'react'
import {CardsList} from "./CardsList";
import { page } from '../scss/style.scss'

export const Page = ({cards}) => {
  return (
    <div className={page}>
      <h2> Event Listing </h2>
      <CardsList cardsCollection={cards}/>
    </div>
  )
}