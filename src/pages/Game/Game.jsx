import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "../../components/Header/GameCell/GameCell";
import GameContext from "../../contexts/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);

  return (
    <div>
      <Container>
        <GameBoardStyle>
          {game.board.map((item, index) => (
            <GameCell key={index} cellItem={item} index={index} />
          ))}
        </GameBoardStyle>
      </Container>
    </div>
  );
};

export default Game;
