import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';
import { useProfileScreenBackend } from './../backend';
import {
  Hyperlink,
  SettingOption,
  SwitchThemeButton,
} from './../components';

const ProfileScreen = ({ navigation }) => {
  const { theme, userIsSignedIn } = React.useContext(AppDataContext);
  const {
    name,
    onPressSignIn,
    onPressSignUp,
    onPressSignOut,
  } = useProfileScreenBackend(navigation);

  const renderGreeting = () => {
    if (userIsSignedIn) {
      return (
        <>
          <Text>
            {`Hi, ${name || 'gamer'}`}
          </Text>
        </>
      );
    }
    return (
      <>
        <View style={[
          Styles[theme].elementContainer,
          { flexDirection: 'row' },
        ]}>
          <Hyperlink
            text='Log in'
            onPress={onPressSignIn}
          />
          <Text> or </Text>
          <Hyperlink
            text='sign up'
            onPress={onPressSignUp}
          />
          <Text> to save your results.</Text>
        </View>
      </>
    );
  };

  return (
    <View
      style={[Styles[theme].container, Styles[theme].profileContainer]}
    >

      {renderGreeting()}

      <SettingOption
        title='Dark Mode'
        button={<SwitchThemeButton />}
      />

    </View>
  );
}

export default ProfileScreen;
