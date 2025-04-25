import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function GameRPC() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const options = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    if (userChoice) {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setComputerChoice(randomChoice);

      setTimeout(() => {
        if (userChoice === randomChoice) {
          setResult("Your Result is Draw !!!");
        } else if (
          (userChoice === "Rock" && randomChoice === "Scissors") ||
          (userChoice === "Paper" && randomChoice === "Rock") ||
          (userChoice === "Scissors" && randomChoice === "Paper")
        ) {
          setResult("Your Result is Win !!!");
        } else {
          setResult("You lost. Try Again!");
        }
      }, 1000); // short delay for realism
    }
  }, [userChoice]);

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  const renderIcon = (choice) => {
    const icons = {
      Rock: "twemoji:rock",
      Paper: "mingcute:paper-line",
      Scissors: "la:hand-scissors",
    };
    return <Icon icon={icons[choice]} height="100" />;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rock Paper Scissors Game</h1>
      <h2>Single Player</h2>
      {result && <h3>{result}</h3>}

      {!result ? (
        <div style={{ display: "flex", gap: "1px" }}>
          <div style={{ width: "50%", backgroundColor: "yellowgreen" }}>
            <h3>You: {userChoice}</h3>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
              {options.map((choice) => (
                <div key={choice} className="choice" onClick={() => setUserChoice(choice)}>
                  {renderIcon(choice)}
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: "50%", backgroundColor: "wheat" }}>
            <h3>Computer: {computerChoice}</h3>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
              {computerChoice && renderIcon(computerChoice)}
            </div>
          </div>
        </div>
      ) : (
        <button onClick={resetGame} style={{ marginTop: 20 }}>Play Again</button>
      )}
    </div>
  );
}
