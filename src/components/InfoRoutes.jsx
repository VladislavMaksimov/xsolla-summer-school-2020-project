import React, { useEffect, useState } from 'react'
import { CardInformation } from './CardInformation'
import { Route } from  'react-router-dom'

const path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";

export const InfoRoutes = () => {
    const [cardsInfo, setInfo] = useState({});

    // Получаем данные из json-файла
    useEffect(() => {
        fetch(path)
            .then(response => response.json())
            .then(response => setInfo(response))
        }, [path]);

    return (Object.values(cardsInfo).map((card) => {
        return (
        <Route exact path={`/card_info/${card.id}`}>
            <CardInformation name={card.name} city={card.city} date={card.date} genre={card.genre} image={card.image}/>
        </Route>
        )
    }))
}