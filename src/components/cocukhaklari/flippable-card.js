import "./card.css";
import Card from "./card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard({ nameFront, nameBack, icon }) {
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          nameFront={nameFront}
          nameBack={nameBack}
          icon={icon}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
