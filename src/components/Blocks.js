import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useBlocksBackend } from '../backend';
import Styles from './../styles';
import { AppDataContext } from '../util';
import CONSTANTS from '../constants';

import CardFlip from 'react-native-card-flip';

const Blocks = (props) => {
  const { theme } = React.useContext(AppDataContext);

  const {
    gridSize,
    pressedCardCallback,
    correctTiles,
    stopInteraction,
    isShowing,
    tileSize,
    elementsRef,
  } = useBlocksBackend(props);

  const cardSize = {
    width: tileSize,
    height: tileSize
  };

  return (
    <View>
      {[...Array(gridSize).keys()].map((row) => (
        <View style={Styles[theme].cardContainer} key={row.toString()}>
          {[...Array(gridSize).keys()].map((index) => (
              <CardFlip
                duration={CONSTANTS.VISUAL.FLIP_DURATION}
                style={[cardSize, Styles[theme].card]}
                key={row * gridSize + index}
                ref={card => elementsRef.current[row * gridSize + index] = card}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  style={[
                    Styles[theme].cardFace,
                    cardSize,
                    Styles[theme].cardFront
                  ]}
                  onPress={() => {
                    isShowing || stopInteraction ? null : elementsRef.current[row * gridSize + index].flip();
                    pressedCardCallback(row * gridSize + index);
                  }}>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[
                    Styles[theme].cardFace,
                    cardSize,
                    correctTiles.includes(row * gridSize + index) ? Styles[theme].cardCorrectBack : Styles[theme].cardIncorrectBack
                  ]}>
                </TouchableOpacity>
              </CardFlip>
            )
          )}
        </View>
      ))}
    </View>
  );
};

export default Blocks;
