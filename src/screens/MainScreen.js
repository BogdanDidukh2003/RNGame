import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const MainScreen = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={Styles[theme].container}>

      <View style={Styles[theme].elementContainer}>
        <Text
          style={Styles[theme].textStyle}
        >Welcome</Text>
      </View>

    </View>
  );
}

export default MainScreen;
