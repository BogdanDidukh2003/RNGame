import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  MainScreen,
  ProfileScreen,
} from './../screens';
import { ProfileButton } from '../components';
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
  const { theme } = React.useContext(AppDataContext);

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
    </Stack.Navigator>
  );
};
