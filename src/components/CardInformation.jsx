import React from 'react'
import { NavLink } from "react-router-dom"
import { InfoContext } from "../context/InfoContext"
import { info_page, info_card, info_card_img, info_card_text } from "../scss/style.scss"
import { useParams } from 'react-router-dom'

export const CardInformation = () => {
    const {id} = useParams();

    return (
        <InfoContext.Consumer>
            {(cardsInfo) =>
            {
                // фильтруем json по id
                const cardsJson = { array: cardsInfo }
                const cardInfo = Object.values(cardsJson.array).filter((card) => card.id === id)[0]
                
                return (
                <div className = { info_page }>
                    <div className = { info_card }>

                        <div className = { info_card_img }>
                            <img src = { cardInfo.image }/>
                        </div>

                        <h3> { cardInfo.name } </h3>

                        <br/>

                        <span className = { info_card_text }>
                            Date: { cardInfo.date } <br/> <br/>
                            City: { cardInfo.city } <br/> <br/>
                            Genre: { cardInfo.genre }
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