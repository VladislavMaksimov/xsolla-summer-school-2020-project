import React from 'react'
import { NavLink } from "react-router-dom"
import { InfoContext } from "../context/InfoContext"
import { info_page, info_card, info_card_img, info_card_text } from "../scss/style.scss"

export const CardInformation = () => {
    return (
        <InfoContext.Consumer>
            {(cardsInfo) =>
            {
                
                (
                <div className = { info_page }>
                    <div className = { info_card }>

                        <div className = { info_card_img }>
                            <img src = { cardsInfo.image }/>
                        </div>

                        <h3> { cardsInfo.name } </h3>

                        <br/>

                        <span className = { info_card_text }>
                            Date: { cardsInfo.date } <br/> <br/>
                            City: { cardsInfo.city } <br/> <br/>
                            Genre: { cardsInfo.genre }
                        </span>

                        <NavLink exact to="/">
                            Назад
                        </NavLink>

                    </div>
                </div>
            )}}
        </InfoContext.Consumer>
    )
}