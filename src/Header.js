// import { useEffect, useState } from "react";

export default function Header({
  onHandleSelectCharacter,
  turn,
  firstPoints,
  secPoints,
  character,
  secCharacter,
  winner,
}) {
  const buttonStyle = {
    borderBottom: "solid 0.2em #96f2d7",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    transition: "0.2s",
  };

  return (
    <div className="header-sec">
      <button
        className="character-btn"
        value="X"
        onClick={(e) => onHandleSelectCharacter(e.target.value)}
        style={turn === "X" ? buttonStyle : { border: "solid 0.1rem #495057" }}
      >
        {winner === "X" ? `X - ${firstPoints}` : `X - ${secPoints}`}
      </button>

      <button
        className="character-btn"
        value="O"
        onClick={(e) => onHandleSelectCharacter(e.target.value)}
        style={turn === "O" ? buttonStyle : { border: "solid 0.1rem #495057" }}
      >
        {winner === "O" ? `O - ${firstPoints}` : `O - ${secPoints}`}
      </button>

      <div>
        {turn === "" ? (
          <h4>Select a player to start </h4>
        ) : (
          <h4> {turn} turn </h4>
        )}
      </div>
    </div>
  );
}
