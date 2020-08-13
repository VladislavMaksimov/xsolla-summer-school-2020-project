import React from 'react'

import { card, day, day_text, card_bottom_text } from '../scss/style.scss'

import no_photo from "../../assets/no_image.png"

export const Card = ({source = no_photo}) => {
    return (
        <div className={card} style={{ backgroundImage:`url(${source})` }}>
            <div className={day}>
                <p className={day_text}/>
            </div>
            <h2 className="card_bottom_text"/>
        </div>
    )
}