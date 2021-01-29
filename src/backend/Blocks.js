import { useState, useEffect, useRef, createRef } from 'react';
import { Dimensions } from 'react-native';

export const useBlocksBackend = (props) => {
  const gridSize = props.size;
  const pressedCardCallback = props.pressedCardCallback;
  const correctTiles = props.correctTiles;
  const pressedTiles = props.pressedTiles;
  const stopInteraction = props.stopInteraction;
  const showCorrectBlocks = props.showCorrectBlocks;
  const [isShowing, setIsShowing] = useState(showCorrectBlocks);

  const tileSize = Dimensions.get('window').width / gridSize - 10;
  const elementsRef = useRef([...Array(gridSize * gridSize).keys()].map(() => createRef()));

  useEffect(() => {
    flipTiles(pressedTiles);
  }, [pressedTiles]);

  useEffect(() => {
    if (isShowing && !showCorrectBlocks) {
      flipTiles(correctTiles);
      setIsShowing(false);
    } else if (showCorrectBlocks) {
      setIsShowing(true);
      flipTiles(correctTiles);
    }
  }, [showCorrectBlocks]);

  const flipTiles = (tilesArray) => {
    for (const i of tilesArray) {
      elementsRef.current[i].flip();
    }
  };

  return {
    gridSize,
    pressedCardCallback,
    correctTiles,
    stopInteraction,
    showCorrectBlocks,
    isShowing,
    tileSize,
    elementsRef,
    flipTiles,
  };
};
