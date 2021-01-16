import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

const SwitchThemeButton = () => {
  const { theme, switchTheme } = React.useContext(AppDataContext);

  return (
    <TouchableOpacity
      onPress={() => {
        switchTheme();
      }}
    >
      <Text
        style={[Styles[theme].textStyle, Styles[theme].switchThemeButton]}
      >&#10227;</Text>
    </TouchableOpacity>
  );
};

export default SwitchThemeButton;
