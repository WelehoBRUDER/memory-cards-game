import "./css/main.scss";
import React, { useEffect } from "react";

function App() {
  const [cards, setCards] = React.useState([
    { name: "Andre", img: "andre.png" },
    { name: "Fire keeper", img: "firekeeper.png" },
    { name: "Greirat", img: "greirat.png" },
    { name: "Hawkwood", img: "hawkwood.jpg" },
    { name: "Ludleth", img: "ludleth.jpg" },
    { name: "Emma", img: "emma.jpg" },
    { name: "Siegward", img: "siegward.png" },
    { name: "Yoel", img: "yoel.png" },
    { name: "Yuria", img: "yuria.png" },
    { name: "Eygon", img: "eygon.jpg" },
    { name: "Irina", img: "irina.png" },
    { name: "Sirris", img: "sirris.png" },
    { name: "Orbeck", img: "orbeck.png" },
    { name: "Leonhard", img: "leonhard.png" },
    { name: "Horace", img: "horace.png" },
    { name: "Anri", img: "anri.png" },
    { name: "Patches", img: "patches.jpg" },
    { name: "Karla", img: "karla.png" },
  ]);
  const [cardsClicked, setCardsClicked] = React.useState([]);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);

  function clickCard(card) {
    let wasClickedBefore =
      cardsClicked.findIndex((oldCard) => oldCard.name === card.name) !== -1;
    if (wasClickedBefore) {
      setCurrentScore(0);
      setCardsClicked([]);
    } else {
      addToCardsClicked(card);
      setCurrentScore(currentScore + 1);
    }
  }

  function shuffleCards() {
    const shuffle = [...cards];
    shuffle.sort(() => (0.5 > Math.random() ? -1 : 1));

    setCards(shuffle);
  }

  function addToCardsClicked(card) {
    const newCardsClicked = [...cardsClicked];
    newCardsClicked.push(card);
    return setCardsClicked(newCardsClicked);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
    shuffleCards();
  }, [currentScore]);

  return (
    <div className="App">
      <h1 className="title">DARK SOULS 3 MEMORY CARDS</h1>
      <div className="score">
        <p>Score: {currentScore}</p>
        <p>Best: {bestScore}</p>
      </div>
      <div className="cardGrid">
        {cards.map((card) => {
          return (
            <div className="memoryCard" onClick={() => clickCard(card)}>
              <img className="cardImage" src={"/img/" + card.img} alt=""></img>
              <p className="cardTitle">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
