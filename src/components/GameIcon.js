import React from 'react';
import { View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

const GameIcon = () => {
  const { theme } = React.useContext(AppDataContext);

  return (
    <>
      <View
        style={{ flexDirection: 'row' }}
      >
        <View style={Styles[theme].gameIconSquare} />
        <View style={Styles[theme].gameIconSquare} />
      </View>
      <View
        style={{ flexDirection: 'row' }}
      >
        <View style={Styles[theme].gameIconSquare} />
        <View style={Styles[theme].gameIconSquare} >
          <View style={Styles[theme].gameIconSquareEmpty} />
        </View>
      </View>
    </>
  );
}

export default GameIcon;
