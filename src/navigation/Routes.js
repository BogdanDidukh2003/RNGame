import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
