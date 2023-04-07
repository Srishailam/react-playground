import React, { useState } from "react";

interface CardProps {
  letter: string;
  onClick: (letter: string) => void;
}

const Game = () => {
  const [cards, setCards] = useState(["A", "B", "A", "C", "C", "B"]);

  const handleClick = (letter: string) => {
    console.log(letter);
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "flex-start",
      margin: 10,
      flexWrap: "wrap",
      border: "1px solid black",
      padding: 10,
    }}
    >
      {cards.map((card, index) => (
        <Card letter={card} onClick={handleClick} key={card + index} />
      ))}
    </div>
  );
}

const Card:React.FC<CardProps> = ({ letter, onClick }) => {
  return (
    <div 
      onClick={() => onClick(letter)} 
      style={{ 
        width: 100, 
        height: 100, 
        backgroundColor: "#BEB7A4", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        margin: 1
      }}
      >
      {letter}
    </div>
  );
}

export default Game;
