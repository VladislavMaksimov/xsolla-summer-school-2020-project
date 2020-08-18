import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"

import { card, card_top_left, card_top_right, card_left, card_right, day, day_text, card_bottom_text } from '../scss/style.scss'
import no_photo from "../../assets/no_image.png"
import { InfoContext } from "../context/InfoContext"

// Карточка
export const Card = ({info, source = no_photo}) => {
    const [second_class, getClassName] = useState("");

    useEffect(() => {
        const id = Number(card.id);
        if (id === 1)
            getClassName(card_top_left)
        else if (id === 2)
            getClassName(card_top_right)
        else if (id % 2 === 0)
            getClassName(card_right)
        else 
            getClassName(card_left)
    }, [info])

    return (
        <InfoContext.Consumer>
            {() => (
                <NavLink exact to="/test">
                <div className={card, second_class} style={{ backgroundImage:`url(${source})` }}>
                        {/* Квадрат с днём */}
                        <div className={day}>
                            <p className={day_text}/>
                        </div>

                        {/* Название мероприятия */}
                        <h2 className="card_bottom_text"/>
                </div>
            </NavLink>
            )} 
        </InfoContext.Consumer>
    )
}