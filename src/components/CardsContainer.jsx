import React, { Fragment } from 'react'

import { cards } from '../scss/style.scss'

import { Card } from './Card'

// Контейнер с карточками
export const CardsContainer = () => {
    return(
        <div className="cards">
            <Card/>
        </div>
    )
}