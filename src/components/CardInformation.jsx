import React, { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import {CardsContext} from "../context";
import {
  info_page,
  info_card,
  info_card_img,
  info_card_text,
} from "../scss/style.scss";

export const CardInformation = () => {
  const { id } = useParams();

  const [card, setCard] = useState({});
  const {cards} = useContext(CardsContext);

  useEffect(() => {
    if (cards.length > 0) {
      setCard(cards.filter((item) => item.id === id)[0]);
    }
  }, [cards]);

  return (
    <div className={info_page}>
      <div className={info_card}>
        <div className={info_card_img}>
          <img src={card.image} />
        </div>
        <h3> {card.name} </h3>
        <br />
        <span className={info_card_text}>
          Date: {card.date} <br /> <br />
          City: {card.city} <br /> <br />
          Genre: {card.genre}
        </span>
        <NavLink exact to="/">
          Назад
        </NavLink>
      </div>
    </div>
  );
};
