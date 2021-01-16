import React, { createContext, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import CONSTANTS from './../constants';

const AppDataContext = createContext();

const AppDataProvider = ({ children }) => {
  const [theme, setTheme] = useState(useColorScheme() || CONSTANTS.THEMES.LIGHT);

  const switchTheme = () => {
    if (theme == CONSTANTS.THEMES.LIGHT) {
      setTheme(CONSTANTS.THEMES.DARK);
      StatusBar.setBarStyle('light-content');
    } else {
      setTheme(CONSTANTS.THEMES.LIGHT);
      StatusBar.setBarStyle('dark-content');
    }
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
