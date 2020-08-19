import React, { useEffect, useState } from 'react'

import { cards } from '../scss/style.scss'

import { Card } from './Card'

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

// Контейнер с карточками
export const CardsContainer = () => {
    const [cardsCollection, getCards] = useState({});

    // Получаем данные из json-файла
    useEffect(() => {
        fetch(path)
            .then(response => response.json())
            .then(response => getCards(response))
        }, [path]);

    return(
        typeof cardsCollection === undefined ? "loading" :
        <div className={cards}>
            {
                // Добавляем карточки
                Object.keys(cardsCollection).map((key) =>{ 
                    const card = cardsCollection[key];
                    return(<Card info={card} source={card.image}/>);
                })
            }
        </div>
    )
}