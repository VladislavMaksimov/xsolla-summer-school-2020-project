import React, { useEffect, useState } from 'react'

import { cards } from '../scss/style.scss'

import { Card } from './Card'
import { InfoContext } from "../context/InfoContext"
import { NavLink } from "react-router-dom"

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

// Контейнер с карточками
export const CardsContainer = () => {

    return(
        typeof cardsCollection === undefined ? "loading" :
        <InfoContext.Consumer>
        {(cardsInfo) => (
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
        )}
        </InfoContext.Consumer>
    )
}