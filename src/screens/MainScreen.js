import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';
import { Blocks }  from './../components';

const MainScreen = () => {
  const { theme } = React.useContext(AppDataContext);

  const callback = (card) => {
    // card.jiggle({ count: 2, duration: 100, progress: 0.05 });
    console.log("Card object received");
  };

  return (
    <View style={Styles[theme].container}>
      <Blocks
        size={4}
        callback={callback}
        correctTiles={[1, 3, 5]}
      />
    </View>
  );
}

export default MainScreen;
