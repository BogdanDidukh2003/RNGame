import React from 'react';

import { Routes } from './navigation';
import { AppDataProvider } from './util';

const App = () => {
  return (
    <AppDataProvider>
      <Routes />
    </AppDataProvider>
  );
};

export default App;
