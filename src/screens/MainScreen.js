import React from 'react';
import { Text, View } from 'react-native';

import CONSTANTS from '../constants';
import Styles from './../styles';
import {
  Button,
  GameIcon,
  Hyperlink,
} from './../components';
import { useMainScreenBackend } from './../backend';
import { AppDataContext } from './../util';

const MainScreen = ({ navigation }) => {
  const { theme } = React.useContext(AppDataContext);
  const {
    gameMode,
    onPressStartGame,
  } = useMainScreenBackend(navigation);

  let screen = null;

  if (gameMode == CONSTANTS.GAME_MODES.START) {
    screen = (
      <>
        <View style={Styles[theme].elementContainer}>
          <GameIcon />
        </View>

        <View style={Styles[theme].elementContainer}>
          <Text
            style={Styles[theme].gameLogo}
          >{CONSTANTS.GAME_LOGO}</Text>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Text
            style={Styles[theme].gameDescription}
          >{CONSTANTS.GAME_DESCRIPTION}</Text>
        </View>

        <View style={Styles[theme].elementContainer}>
          <Button
            title='START'
            onPress={onPressStartGame}
          />
        </View>
      </>
    );
  } else if (gameMode == CONSTANTS.GAME_MODES.GAME) {
    screen = (
      <>
      </>
    );
  } else if (gameMode == CONSTANTS.GAME_MODES.END) {
    screen = (
      <>
      </>
    );
  }

  return (
    <View style={[Styles[theme].container, Styles[theme].gameContainer]}>
      {screen}
    </View>
  );
}

export default MainScreen;
