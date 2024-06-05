import Header from "./Header";
import Board from "./Board";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [character, setCharacter] = useState("");
  const [secCharacter, setSecCharacter] = useState("");
  const [turn, setTurn] = useState("");
  const [firstPoints, setFirstPoints] = useState(0);
  const [secPoints, setSecPoints] = useState(0);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setFirstPoints(firstPoints);
    setSecPoints(secPoints);
  }, []);

  function handleSelectCharacter(e) {
    if (e === "X") {
      setCharacter(e);
      setSecCharacter("O");
    } else if (e === "O") {
      setCharacter(e);
      setSecCharacter("X");
    }
  }

  useEffect(() => {
    setTurn(character);
  }, [character]);

  function handleCurrentTurn() {
    if (turn === character) {
      setTurn(secCharacter);
    } else if (turn === secCharacter) {
      setTurn(character);
    }
  }

  // console.log(character);
  // console.log(secCharacter);

  return (
    <div className="app">
      <Header
        onHandleSelectCharacter={handleSelectCharacter}
        turn={turn}
        firstPoints={firstPoints}
        secPoints={secPoints}
        character={character}
        secCharacter={secCharacter}
        winner={winner}
      />

      <Board
        character={character}
        secCharacter={secCharacter}
        onHandleCurrentTurn={handleCurrentTurn}
        turn={turn}
        setFirstPoints={setFirstPoints}
        setSecPoints={setSecPoints}
        firstPoints={firstPoints}
        secPoints={secPoints}
        setCharacter={setCharacter}
        setSecChracter={setSecCharacter}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
}
