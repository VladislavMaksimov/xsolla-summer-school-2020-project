import React from 'react'
import { page } from '../scss/style.scss'
import { CardsContainer } from './CardsContainer'

export const Page = () => {
  return (
    <div className={page}>
      <h2> Event Listing </h2>
      <CardsContainer/>
    </div>
  )
}