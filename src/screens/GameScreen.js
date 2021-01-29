import React from 'react';
import { Text, View } from 'react-native';

import CONSTANTS from '../constants';
import Styles from './../styles';
import {
  Button,
  GameIcon,
} from './../components';
import { useGameScreenBackend } from '../backend';
import { AppDataContext } from '../util';
import { Blocks } from './../components';

const GameScreen = ({ navigation }) => {
  const { theme } = React.useContext(AppDataContext);
  const {
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
  } = useGameScreenBackend(navigation);

  let screen = null;

  if (gameMode == CONSTANTS.GAME_MODES.GAME) {
    screen = (
      <>
        <View
          style={Styles[theme].gameContainer}
        >
          <View
            style={[Styles[theme].gameBar, { flex: 1 }]}
          >
            <Text
              style={Styles[theme].gameBarText}
            >{`Level: ${level}  Lives: ${lives}`}</Text>
          </View>

          <View style={{ flex: 3 }}>
            <Blocks
              size={fieldSize}
              pressedCardCallback={pressedCardCallback}
              correctTiles={correctTiles}
              showCorrectBlocks={showCorrectBlocks}
              pressedTiles={flipBackTiles}
              stopInteraction={stopInteraction}
            />
          </View>

          <View style={{ flex: 1 }}/>
        </View>
      </>
    );
  } else if (gameMode == CONSTANTS.GAME_MODES.END) {
    screen = (
      <>
        <View style={Styles[theme].elementContainer}>
          <GameIcon small={true}/>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Text
            style={Styles[theme].gameLogoSmall}
          >{CONSTANTS.GAME_LOGO}</Text>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Text
            style={[Styles[theme].gameLogo,
              { fontSize: Math.round(Styles[theme].gameLogo.fontSize * 1.5) }]}
          >{`Level ${level}`}</Text>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Text
            style={Styles[theme].gameDescription}
          >Log in or sign up to save your results.</Text>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Button
            title='Try again'
            onPress={onPressTryAgain}
          />
        </View>
      </>
    );
  }

  return (
    <View style={Styles[theme].container}>
      {screen}
    </View>
  );
}

export default GameScreen;
