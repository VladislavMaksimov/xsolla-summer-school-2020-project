import React from 'react'
import { NavLink } from "react-router-dom"

export const CardInformation = () => {
    return (
        <div>
            Some Information :3
            <NavLink exact to="/">
                Назад
            </NavLink>
        </div>
    )
}