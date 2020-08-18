import React from 'react'
import { NavLink } from "react-router-dom"
import { InfoContext } from "../context/InfoContext"

export const CardInformation = () => {
    return (
        <InfoContext.Consumer>
            {(value) => (
                <div>
                    {console.dir(value.card_info)} <br/>
                    <NavLink exact to="/">
                        Назад
                    </NavLink>
                </div>
            )}
        </InfoContext.Consumer>
    )
}