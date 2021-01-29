import React, { useState, useEffect } from 'react';

import CONSTANTS from '../constants';
import {
  firebase,
  getNumberOfBlocksInLine,
  getRandomSelectionOfBlocks,
  getSequenceNumber,
} from '../logic';
import { AppDataContext } from './../util';

export const useGameScreenBackend = (navigation) => {
  const { userIsSignedIn } = React.useContext(AppDataContext);

  const [showCorrectBlocks, setShowCorrectBlocks] = useState(false);
  const [stopInteraction, setStopInteraction] = useState(false);
  const [correctTiles, setCorrectTiles] = useState([]);
  const [pressedTiles, setPressedTiles] = useState([]);
  const [flipBackTiles, setFlipBackTiles] = useState([]);
  const [fieldSize, setFieldSize] = useState(CONSTANTS.GAME_LOGIC.INIT_FIELD_SIZE);
  const [gameMode, setGameMode] = useState(CONSTANTS.GAME_MODES.START);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(CONSTANTS.GAME_LOGIC.MAX_LIVES);
  const [mistakes, setMistakes] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setGameMode(CONSTANTS.GAME_MODES.GAME);
  }, []);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      setCorrectTiles(
        getRandomSelectionOfBlocks(fieldSize, getSequenceNumber(level))
      );
    } else if (gameMode == CONSTANTS.GAME_MODES.END) {
      if (userIsSignedIn) {
        let remoteBestScore = 0;
        firebase.getUserData((userDoc) => {
          remoteBestScore = userDoc.data().bestScore;
          if (remoteBestScore && (remoteBestScore < bestScore)) {
            firebase.updateUserData({
              bestScore: bestScore,
            });
          }
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }, [gameMode]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      setShowCorrectBlocks(true);
      setTimeout(() => {
        setShowCorrectBlocks(false);
      }, CONSTANTS.GAME_LOGIC.TIME_TO_SHOW_BLOCKS);
    }
  }, [gameMode, correctTiles]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      if (level > bestScore) {
        setBestScore(level);
      }
      setStopInteraction(true);
      setFlipBackTiles(pressedTiles);
      setTimeout(() => {
        setStopInteraction(false);
        setMistakes(0);
        setPressedTiles([]);
        setFieldSize(getNumberOfBlocksInLine(level));
        setCorrectTiles(
          getRandomSelectionOfBlocks(fieldSize, getSequenceNumber(level))
        );
      }, CONSTANTS.VISUAL.FLIP_DURATION + 100);
    }
  }, [level]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      if (mistakes > CONSTANTS.GAME_LOGIC.MAX_MISTAKES) {
        setLives(lives - 1);
        setMistakes(0);
      }
    }
  }, [mistakes]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      if (lives <= 0) {
        setGameMode(CONSTANTS.GAME_MODES.END);
      }
    }
  }, [lives]);

  useEffect(() => {
    if (gameMode == CONSTANTS.GAME_MODES.GAME) {
      if (correctTiles.every(element => pressedTiles.indexOf(element) > -1) && pressedTiles.length != 0) {
        setLevel(level + 1);
      }
    }
  }, [pressedTiles]);

  const onPressTryAgain = () => {
    navigation.navigate(CONSTANTS.SCREENS.MAIN);
  };

  const pressedCardCallback = (cardIndex) => {
    setPressedTiles([...pressedTiles, cardIndex])
    if (!correctTiles.includes(cardIndex)) {
      setMistakes(mistakes + 1);
    }
  };

  return {
    showCorrectBlocks,
    stopInteraction,
    correctTiles,
    flipBackTiles,
    fieldSize,
    gameMode,
    level,
    lives,
    onPressTryAgain,
    pressedCardCallback,
  };
};
