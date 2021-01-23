import { useState, useEffect } from 'react';

import CONSTANTS from '../constants';

export const useMainScreenBackend = (navigation) => {
  const [blocksAreShown, setBlocksAreShown] = useState(false);
  const [correctTiles, setCorrectTiles] = useState([]);
  const [fieldSize, setFieldSize] = useState(3);
  const [gameMode, setGameMode] = useState(CONSTANTS.GAME_MODES.START);

  useEffect(() => {
    setCorrectTiles([1, 2, 3]);
    setBlocksAreShown(true);
    setTimeout(() => {
      setBlocksAreShown(false);
    }, CONSTANTS.GAME_LOGIC.TIME_TO_SHOW_BLOCKS);
  }, []);

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
    onPressLogIn,
    onPressSignUp,
    onPressStartGame,
    pressedCardCallback,
  };
};
