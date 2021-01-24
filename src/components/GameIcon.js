import React from 'react';
import { View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

const GameIcon = (props) => {
  const { theme } = React.useContext(AppDataContext);

  return (
    <>
      <View
        style={{ flexDirection: 'row' }}
      >
        <View style={
          props.small
            ? Styles[theme].gameIconSquareSmall
            : Styles[theme].gameIconSquare
        } />
        <View style={
          props.small
            ? Styles[theme].gameIconSquareSmall
            : Styles[theme].gameIconSquare
        } />
      </View>
      <View
        style={{ flexDirection: 'row' }}
      >
        <View style={
          props.small
            ? Styles[theme].gameIconSquareSmall
            : Styles[theme].gameIconSquare
        } />
        <View style={
          props.small
            ? Styles[theme].gameIconSquareSmall
            : Styles[theme].gameIconSquare
        } >
          <View style={
          props.small
            ? Styles[theme].gameIconSquareEmptySmall
            : Styles[theme].gameIconSquareEmpty
        } />
        </View>
      </View>
    </>
  );
}

export default GameIcon;
