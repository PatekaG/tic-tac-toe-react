import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../../contexts/GameContext";
import { checkForWinner } from "../../../utils/GameUtils";
import { ModalContext } from "../../../contexts/ModalContext";
import RoundOverModal from "../../Modal/RoundOverModal/RoundOverModal";
import IconX from "../../../assets/svgs/icon-x.svg?react";
import IconO from "../../../assets/svgs/icon-o.svg?react";
import XIconOutline from "../../../assets/svgs/icon-x-outlined.svg?react";
import OIconOutline from "../../../assets/svgs/icon-o-outlined.svg?react";
import { SfxContext } from "../../../contexts/SfxContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, winSfx, completedSfx } = useContext(SfxContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      } else {
        completedSfx();
      }
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {/* {game.turn === "x" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )} */}
    </CellStyle>
  );
};

export default GameCell;
