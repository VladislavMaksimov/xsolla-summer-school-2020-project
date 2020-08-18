import React from 'react'
import { page } from '../scss/style.scss'
import { CardsContainer } from './CardsContainer'

export const Page = () => {
  return (
    <div className={page}>
      <h1> Event Listing </h1>
      <CardsContainer/>
    </div>
  )
}