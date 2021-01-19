import React, { createContext, useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import CONSTANTS from './../constants';

const AppDataContext = createContext();

const configureStatusBar = (theme) => {
  StatusBar.setBarStyle(
    (theme == CONSTANTS.THEMES.LIGHT
      ? 'dark' : 'light'
    ) + '-content');
  StatusBar.setBackgroundColor(
    theme == CONSTANTS.THEMES.LIGHT
      ? CONSTANTS.COLORS.MAIN_BACKGROUND
      : CONSTANTS.COLORS.DARK_BACKGROUND
  );
};

const AppDataProvider = ({ children }) => {
  const [theme, setTheme] = useState(useColorScheme() || CONSTANTS.THEMES.LIGHT);

  useEffect(() => {
    configureStatusBar(theme);
  });

  const changeThemeTo = (theme) => {
    setTheme(theme);
    configureStatusBar(theme);
  };

  const switchTheme = () => {
    let newTheme;
    if (theme == CONSTANTS.THEMES.LIGHT) {
      newTheme = CONSTANTS.THEMES.DARK;
    } else {
      newTheme = CONSTANTS.THEMES.LIGHT;
    }

    changeThemeTo(newTheme);
  };

  return (
    <AppDataContext.Provider
      value={{
        switchTheme,
        theme,
        switchTheme,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export {
  AppDataContext,
  AppDataProvider,
};
