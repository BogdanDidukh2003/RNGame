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
    bestScore,
    name,
    onPressSignIn,
    onPressSignUp,
    onPressSignOut,
  } = useProfileScreenBackend(navigation);

  const renderGreeting = () => {
    if (userIsSignedIn) {
      return (
        <>
          <Text style={Styles[theme].greeting}>
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
          <Text
            style={[Styles[theme].textStyle,
            { fontSize: Styles[theme].hyperlink.fontSize }]}
          > or </Text>
          <Hyperlink
            text='sign up'
            onPress={onPressSignUp}
          />
          <Text
            style={[Styles[theme].textStyle,
            { fontSize: Styles[theme].hyperlink.fontSize }]}
          > to save your results.</Text>
        </View>
      </>
    );
  };

  const renderBestScore = () => {
    if (!userIsSignedIn) {
      return null;
    }
    return (
      <SettingOption
        title='Best Score'
        button={
          <Text
            style={[Styles[theme].textStyle,
            Styles[theme].optionTitleText,
            { marginRight: 16 }]}
          >{bestScore}</Text>
        }
      />
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

        {renderBestScore()}

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
