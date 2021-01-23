import { useState, useEffect } from 'react';

import CONSTANTS from '../constants';

export const useMainScreenBackend = (navigation) => {
  const [gameMode, setGameMode] = useState(CONSTANTS.GAME_MODES.START);

  const onPressStartGame = () => {
    setGameMode(CONSTANTS.GAME_MODES.GAME);
  };

  const onPressLogIn = () => { };
  const onPressSignUp = () => { };

  return {
    gameMode,
    onPressLogIn,
    onPressSignUp,
    onPressStartGame,
  };
};
