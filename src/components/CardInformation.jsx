import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { info_page, info_card, info_card_img, info_card_text } from '../scss/style.scss'

export const CardInformation = ({ name, city, date, genre, image }) => {
  const { id } = useParams()

  return (

    <div className = { info_page }>
      <div className = { info_card }>

        <div className = { info_card_img }>
          <img src = { image }/>
        </div>

        <h3> { name } </h3>

        <br/>

        <span className = { info_card_text }>
                            Date: { date } <br/> <br/>
                            City: { city } <br/> <br/>
                            Genre: { genre }
        </span>

        <NavLink exact to="/">
                            Назад
        </NavLink>

      </div>
    </div>
  )
}
