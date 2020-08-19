import React from 'react'
import { NavLink } from "react-router-dom"
import { InfoContext } from "../context/InfoContext"
import { info_page, info_card, info_card_img, info_card_text } from "../scss/style.scss"

export const CardInformation = () => {
    return (
        <InfoContext.Consumer>
            {({card_info, setInfo}) => (
                <div className = { info_page }>
                    <div className = { info_card }>

                        <div className = { info_card_img }>
                            <img src = { card_info.image }/>
                        </div>

                        <h3> { card_info.name } </h3>

                        <br/>

                        <span className = { info_card_text }>
                            Date: { card_info.date } <br/> <br/>
                            City: { card_info.city } <br/> <br/>
                            Genre: { card_info.genre }
                        </span>
                        
                        <NavLink exact to="/">
                            Назад
                        </NavLink>

                    </div>
                </div>
            )}
        </InfoContext.Consumer>
    )
}