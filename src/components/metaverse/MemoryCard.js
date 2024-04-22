import React from "react";
import classnames from "classnames";
import cardBack from "./imagesMemoryGame/cardBack.png";
import "./MemoryGame.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("cardMemoryGame", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={cardBack} alt="cardBack" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="cardBack" />
      </div>
    </div>
  );
};

export default Card;
