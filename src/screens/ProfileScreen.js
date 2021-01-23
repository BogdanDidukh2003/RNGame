import React from 'react';
import { View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';
import {
  SettingOption,
  SwitchThemeButton,
} from './../components';

const ProfileScreen = () => {
  const { theme } = React.useContext(AppDataContext);

  return (
    <View
      style={[Styles[theme].container, Styles[theme].profileContainer]}
    >

      <SettingOption
        title='Dark Mode'
        button={<SwitchThemeButton />}
      />

    </View>
  );
}

export default ProfileScreen;
