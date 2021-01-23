import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';
import { Blocks }  from './../components';
import CONSTANTS from './../constants'

const MainScreen = () => {
  const { theme } = React.useContext(AppDataContext);
  const [blocksAreShown, setBlocksAreShown] = React.useState();

  const callback = (cardIndex) => {
    // card.jiggle({ count: 2, duration: 100, progress: 0.05 });
    console.log(cardIndex);
  };
  React.useEffect(() => {
  setBlocksAreShown(true);
      setTimeout(() => {
  setBlocksAreShown(false);
}, CONSTANTS.GAME_LOGIC.TIME_TO_SHOW_BLOCKS);
  }, []);

  return (
    <View style={Styles[theme].container}>
      <Blocks
        size={4}
        callback={callback}
        correctTiles={[1, 3, 5]}
        blocksAreShown={blocksAreShown}
      />
    </View>
  );
}

export default MainScreen;
