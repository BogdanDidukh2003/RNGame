import React from 'react';
import { Text, View } from 'react-native';

import CONSTANTS from '../constants';
import Styles from './../styles';
import {
  Button,
  GameIcon,
} from './../components';
import { useMainScreenBackend } from '../backend';
import { AppDataContext } from '../util';

const MainScreen = ({ navigation }) => {
  const { theme } = React.useContext(AppDataContext);
  const {
    onPressStartGame,
  } = useMainScreenBackend(navigation);

  return (
    <View style={Styles[theme].container}>
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
    </View>
  );
}

export default MainScreen;
