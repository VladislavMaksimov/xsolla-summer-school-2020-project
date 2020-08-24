import React from "react";
import { Card } from "./Card";
import { cards } from "../scss/style.scss";

export const CardsList = ({ cardsCollection }) => (
  <div className={cards}>
    {Object.keys(cardsCollection).map((key) => {
      const card = cardsCollection[key];
      return (
        <div key={card.id}>
          <Card info={card} />
        </div>
      );
    })}
  </div>
);
