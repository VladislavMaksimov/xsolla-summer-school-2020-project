import React, { useEffect, useState } from 'react'

import { cards } from '../scss/style.scss'

import { Card } from './Card'
import { InfoContext } from "../context/InfoContext"
import { NavLink } from "react-router-dom"

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

// Контейнер с карточками
export const CardsContainer = () => {

    const [cardsInfo, setInfo] = useState({});

    // Получаем данные из json-файла
    useEffect(() => {
    fetch(path)
        .then(response => response.json())
        .then(response => setInfo(response))
    }, [path]);

    return(
        <div className={cards}>
            {
                // Добавляем карточки
                    Object.keys(cardsInfo).map((key) =>{ 
                        const card = cardsInfo[key];
                        return(
                        <NavLink exact to={`/card_info/${card.id}`}>
                            <Card info={card} source={card.image}/>
                        </NavLink>
                    );
                })
            }
        </div>
    )
}