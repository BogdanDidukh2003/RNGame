import { useState, useEffect } from 'react';

import CONSTANTS from '../constants';
import {
  getNumberOfBlocksInLine,
} from '../logic';

export const useMainScreenBackend = (navigation) => {
  const [blocksAreShown, setBlocksAreShown] = useState(false);
  const [correctTiles, setCorrectTiles] = useState([]);
  const [fieldSize, setFieldSize] = useState(CONSTANTS.GAME_LOGIC.INIT_FIELD_SIZE);
  const [gameMode, setGameMode] = useState(CONSTANTS.GAME_MODES.START);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(CONSTANTS.GAME_LOGIC.MAX_LIVES);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      setCorrectTiles([1, 2, 3]);
    }
  }, [gameMode]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      setBlocksAreShown(true);
      setTimeout(() => {
        setBlocksAreShown(false);
      }, CONSTANTS.GAME_LOGIC.TIME_TO_SHOW_BLOCKS);
    }
  }, [gameMode, correctTiles]);

  useEffect(() => {
    setFieldSize(getNumberOfBlocksInLine(level));
  }, [level]);

  const onPressStartGame = () => {
    setGameMode(CONSTANTS.GAME_MODES.GAME);
  };

  const onPressLogIn = () => { };
  const onPressSignUp = () => { };

  const pressedCardCallback = (cardIndex) => {
    console.log(cardIndex);
  };

  return {
    blocksAreShown,
    correctTiles,
    fieldSize,
    gameMode,
    level,
    lives,
    onPressLogIn,
    onPressSignUp,
    onPressStartGame,
    pressedCardCallback,
  };
};
