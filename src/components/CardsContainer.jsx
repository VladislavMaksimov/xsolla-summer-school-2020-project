import React, { Fragment, useEffect, useState } from 'react'

import { cards } from '../scss/style.scss'

import { Card } from './Card'

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

// Контейнер с карточками
export const CardsContainer = () => {
    const [cardsCollection, getCards] = useState({});

    useEffect(() => {
        fetch(path)
          .then(response => {getCards(response.json())});
    }, [path])

    return(
        <div className={cards}>
        {
            Object.keys(cardsCollection).map((key) =>{
                const card = cardsCollection[key];
                <Card info={card} source={card.image}/>
            })
        }
        </div>
    )
}