import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  GameScreen,
  MainScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from './../screens';
import { ProfileButton } from '../components';
import { firebase } from '../logic';
import { AppDataContext } from '../util';

const Stack = createStackNavigator();

const renderHeaderRight = (navigation) => {
  return () => (
    <ProfileButton
      onPress={() => {
        navigation.navigate(CONSTANTS.SCREENS.PROFILE);
      }}
    />
  );
};

export const AppStack = () => {
  const { theme, userIsSignedIn, changeThemeTo } = React.useContext(AppDataContext);

  useEffect(() => {
    if (userIsSignedIn) {
      const unsubscribe = firebase.collectionReference
        .doc(firebase.auth.currentUser.uid)
        .onSnapshot(themeSynchronizationCallback);

      return () => {
        unsubscribe();
      };
    }
  }, [userIsSignedIn]);

  const themeSynchronizationCallback = (userDoc) => {
    const userTheme = userDoc.data().theme;
    if (userTheme) {
      changeThemeTo(userTheme);
    }
  };

  return (
    <Stack.Navigator
      initialRouteName={CONSTANTS.SCREENS.MAIN}
      screenOptions={({ navigation }) => ({
        headerRight: renderHeaderRight(navigation),
        headerTintColor: theme == CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.COLORS.BLACK_TEXT
          : CONSTANTS.COLORS.WHITE_TEXT,
        headerStyle: {
          backgroundColor: theme == CONSTANTS.THEMES.LIGHT
            ? CONSTANTS.COLORS.MAIN_BACKGROUND
            : CONSTANTS.COLORS.DARK_BACKGROUND,
        },
      })}
    >
      <Stack.Screen
        name={CONSTANTS.SCREENS.GAME}
        component={GameScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.GAME,
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.MAIN}
        component={MainScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.MAIN,
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          headerRight: null,
          title: CONSTANTS.SCREEN_TITLES.PROFILE,
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.SIGN_IN}
        component={SignInScreen}
        options={{
          headerRight: null,
          title: CONSTANTS.SCREEN_TITLES.SIGN_IN,
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.SIGN_UP}
        component={SignUpScreen}
        options={{
          headerRight: null,
          title: CONSTANTS.SCREEN_TITLES.SIGN_UP,
        }}
      />
    </Stack.Navigator>
  );
};
