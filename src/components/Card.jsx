import React, { useState, useEffect } from 'react'

import { card, card_left, card_right, day, day_text, card_bottom_text } from '../scss/style.scss'
import no_photo from "../../assets/no_image.png"
// Карточка
export const Card = ({info, source = no_photo}) => {
    const [second_class, getClassName] = useState("");

    useEffect(() => {
        const id = Number(info.id);
        if (id === 1)
            getClassName(card_left)
        else if (id === 2)
            getClassName(card_right)
        else if (id % 2 === 0)
            getClassName(card_right)
        else 
            getClassName(card_left)
    }, [info])

    return (
            <div className={card + ' ' + second_class} style={{ backgroundImage:`url(${source})` }}>

                {/* Квадрат с днём */}
                <div className={day}>
                    <p className={day_text}> { info.date.split('.')[0] } </p>
                </div>

                {/* Название мероприятия */}
                <h2 className={card_bottom_text}> { info.name } </h2>
                            
            </div>
            )
}