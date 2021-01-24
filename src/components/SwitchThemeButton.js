import React from 'react';
import { Switch } from 'react-native';

import CONSTANTS from './../constants';
import { AppDataContext } from './../util';

const SwitchThemeButton = () => {
  const { theme, switchTheme } = React.useContext(AppDataContext);

  return (
    <Switch
      trackColor={{ false: '#767577', true: '#EB884A' }}
      thumbColor={theme == CONSTANTS.THEMES.DARK ? '#d3d3d3' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={switchTheme}
      value={theme == CONSTANTS.THEMES.DARK}
    />
  );
};

export default SwitchThemeButton;
