import { useState, useEffect } from 'react';

import CONSTANTS from '../constants';

export const useMainScreenBackend = (navigation) => {
  const [blocksAreShown, setBlocksAreShown] = useState(false);
  const [correctTiles, setCorrectTiles] = useState([]);
  const [fieldSize, setFieldSize] = useState(3);
  const [gameMode, setGameMode] = useState(CONSTANTS.GAME_MODES.START);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

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
