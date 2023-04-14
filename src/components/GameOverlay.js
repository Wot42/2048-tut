import React from "react";
import TryAgainLogo from "../assets/img/try-again.gif";

export const GameOverlay = ({ onRestart, board }) => {
  console.log(board.hasLost());
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={TryAgainLogo}
          alt="try again"
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default GameOverlay;
