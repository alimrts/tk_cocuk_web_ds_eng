import { useEffect, useState, useRef, useCallback } from "react";

import useZustandStore from "../../zustandStore";

import Card from "./MemoryCard";
import "./MemoryGame.css";

import { uniqueElementsArray25 } from "./CardData";
// import { uniqueElementsArray15 } from "./CardData";
// import { uniqueElementsArray5 } from "./CardData";

import memoryGameLogo from "./imagesMemoryGame/memory_game_logo_eng.png";

/////

/////

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

/////////////////////////////////////////
export default function MemoryGame() {
  const [gridColumns, setGridColumns] = useState(5);
  const [gridRows, setGridRows] = useState(2);
  const [uniqueElementsArray, setUniqueElementsArray] = useState(
    uniqueElementsArray25
  );

  const [isGridChanging, setIsGridChanging] = useState(false);

  const [seviye, setSeviye] = useState("");

  const [bgColor, setBgColor] = useState("#DEDEDE");

  const handleGridChange = (columns, rows, uniqueElementsArray) => {
    setIsGridChanging(true);
    setUniqueElementsArray(uniqueElementsArray);
    setGridColumns(columns);
    setGridRows(rows);
    setCards(generateShuffledCards());
  };

  ///

  const [unique15, setUnique15] = useState([]);
  const [unique5, setUnique5] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleTheArrays = () => {
    // Shuffle the original array
    const shuffledArray = shuffleArray([...uniqueElementsArray25]);

    // Select 15 random elements for unique15
    const newUnique15 = shuffledArray.slice(0, 15);

    // Select 5 random elements for unique5
    const newUnique5 = shuffledArray.slice(15, 20);

    // Update state with shuffled arrays
    setUnique15(newUnique15);
    setUnique5(newUnique5);
  };

  const generateShuffledCards = useCallback(() => {
    shuffleTheArrays();
    const combinedArray = uniqueElementsArray.concat(uniqueElementsArray);
    return shuffleCards(combinedArray);
  }, [uniqueElementsArray]);

  useEffect(() => {
    setCards(generateShuffledCards());
    if (gridRows === 2) {
      setSeviye("Easy");
      setBgColor("rgba(150, 250, 150, 0.1)");
    } else if (gridRows === 6) {
      setSeviye("Normal");
      setBgColor("rgba(168, 252, 255, 0.1)");
    } else {
      setSeviye("Hard");
      setBgColor("rgba(253, 108, 98, 0.1)");
    }
  }, [uniqueElementsArray, gridColumns, gridRows, generateShuffledCards]);

  const [cards, setCards] = useState(
    shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    shuffleTheArrays();
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));

    setIsGridChanging(false);
  };

  const setIsAnyGameOpened = useZustandStore(
    (state) => state.setIsAnyGameOpened
  );

  useEffect(() => {
    setIsAnyGameOpened(true);

    return () => setIsAnyGameOpened(false);
  }, []);

  return (
    <div
      className="memory"
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        aliginItems: "center",
        background: "lightGrey",
        width: "480px",
        height: "860px",
        borderRadius: 8,
      }}
    >
      <div className="memoryGameContent">
        {isGridChanging ? (
          <>
            {!showModal ? (
              <>
                <div className="ustBar">
                  <div>Level: {seviye}</div>
                  <div className="score">
                    <div className="moves">
                      <span>Move count:</span> {moves}
                    </div>
                    {localStorage.getItem("bestScore") && (
                      <div className="high-score">
                        <span className="bold">Best:</span> {bestScore}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="memory"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    aliginItems: "center",
                    background: "lightGrey",
                    width: "480px",
                    height: "820px",
                    borderRadius: 8,
                  }}
                >
                  <div
                    className="cardContainer"
                    style={{
                      background: bgColor,
                      gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                      gridTemplateRows: `repeat(${gridRows}, 1fr)`,
                    }}
                  >
                    {cards.map((card, index) => {
                      return (
                        <Card
                          key={index}
                          card={card}
                          index={index}
                          isDisabled={shouldDisableAllCards}
                          isInactive={checkIsInactive(card)}
                          isFlipped={checkIsFlipped(index)}
                          onClick={handleCardClick}
                        />
                      );
                    })}
                  </div>
                  {/* <div className="restart">
                <button
                  className="mGamebuttonYenile"
                  onClick={handleRestart}
                  color="primary"
                  variant="contained"
                >
                  Yenile
                </button>
              </div> */}
                </div>{" "}
                <div className="restart">
                  <button
                    className="mGamebuttonYenile"
                    onClick={handleRestart}
                    color="primary"
                    variant="contained"
                  >
                    Refresh
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                userSelect: "none",
              }}
            >
              <img src={memoryGameLogo}></img>
            </div>

            <div className="controls">
              <h4> Flip the cards to find the same cards.</h4>
              <div>Choose difficulty level.</div>{" "}
              <button
                className="mGamebuttonKolay"
                onClick={() => handleGridChange(5, 2, unique5)}
              >
                Easy: 5x2
              </button>
              <button
                className="mGamebuttonNormal"
                onClick={() => handleGridChange(5, 6, unique15)}
              >
                Normal: 5x6
              </button>
              <button
                className="mGamebuttonZor"
                onClick={() => handleGridChange(5, 10, uniqueElementsArray25)}
              >
                Hard: 5x10
              </button>
            </div>
          </>
        )}

        {showModal ? (
          <div
            style={{
              position: "absolute",
              top: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              borderRadius: "1rem",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "white",
              padding: "1rem",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Congratulations!
              <br /> You found all the cards.
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                You completed the game in {moves} moves.
                <br /> Your best move count is {bestScore}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <button
                className="mGamebuttonYenile"
                onClick={handleRestart}
                color="primary"
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
