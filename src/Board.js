import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Board({
  character,
  secCharacter,
  turn,
  onHandleCurrentTurn,
  setFirstPoints,
  setSecPoints,
  firstPoints,
  secPoints,
  setCharacter,
  setSecChracter,
  winner,
  setWinner,
}) {
  const [gameOver, setGameOver] = useState(false);
  const [box, setBox] = useState(Array(9).fill({ value: " " }));
  const [letter, setLetter] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count);
  }, [count]);

  useEffect(() => {
    if (count > 2) {
      setLetter(turn);
      if (
        letter === box[0].value &&
        letter === box[1].value &&
        letter === box[2].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }
      if (
        letter === box[3].value &&
        letter === box[4].value &&
        letter === box[5].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[6].value &&
        letter === box[7].value &&
        letter === box[8].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[0].value &&
        letter === box[3].value &&
        letter === box[6].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[1].value &&
        letter === box[4].value &&
        letter === box[7].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[2].value &&
        letter === box[5].value &&
        letter === box[8].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[0].value &&
        letter === box[4].value &&
        letter === box[8].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }

      if (
        letter === box[2].value &&
        letter === box[4].value &&
        letter === box[6].value
      ) {
        setGameOver(!gameOver);

        if (letter === character) {
          setFirstPoints((first) => first + 1);
          setWinner(character);
        } else if (letter === secCharacter) {
          setSecPoints((sec) => sec + 1);
          setWinner(secCharacter);
        }
      }
      if (count === 9) {
        setGameOver(!gameOver);
      }
    }
  }, [count]);

  function handlePlay(id) {
    if (box[id].value !== " ") {
      return;
    }
    if (turn === "") {
      return;
    }

    setBox(
      box.map((index, x) => (x === id ? { ...index[x], value: turn } : index))
    );

    setCount((c) => c + 1);

    onHandleCurrentTurn();
  }

  function handleRestartGame() {
    setBox(Array(9).fill({ value: " " }));
    setCharacter("");
    setSecChracter("");
    setGameOver(false);
    setCount(0);
  }
  console.log(firstPoints);
  console.log(secPoints);
  console.log(count);

  return (
    <>
      {gameOver ? (
        <div className="win-banner" onClick={() => handleRestartGame()}>
          {count === 9 ? <span>DRAW!</span> : <span>{winner} WINS!</span>}
        </div>
      ) : (
        <div className="board-sec">
          <div className="board">
            {box.map((x, index) => (
              <div
                key={index}
                className={`cube cube-${index}`}
                onClick={() => handlePlay(index)}
              >
                <div className="cube-value" id={index}>
                  {x.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer onHandleRestartGame={handleRestartGame} />
    </>
  );
}
