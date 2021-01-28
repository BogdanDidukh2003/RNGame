import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';
import { useProfileScreenBackend } from './../backend';
import {
  Hyperlink,
  SettingOption,
  SwitchThemeButton,
  WideButton,
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

  const renderSignOutButton = () => {
    if (!userIsSignedIn) {
      return null;
    }
    return (
      <View style={Styles[theme].buttonMenuContainer}>
        <WideButton
          title='Sign Out'
          onPress={onPressSignOut}
        />
      </View>
    );
  };

  return (
    <>
      <View
        style={[Styles[theme].container, Styles[theme].profileContainer]}
      >

        {renderGreeting()}

        <SettingOption
          title='Dark Mode'
          button={<SwitchThemeButton />}
        />

      </View>
      {renderSignOutButton()}
    </>
  );
}

export default ProfileScreen;
