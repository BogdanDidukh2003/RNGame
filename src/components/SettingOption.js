import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

const SettingOption = (props) => {
  const { theme } = React.useContext(AppDataContext);

  return (
    <>
      <View
        style={Styles[theme].optionContainer}
      >
        <View
          style={Styles[theme].optionTitle}
        >
          <Text
            style={[Styles[theme].textStyle, Styles[theme].optionTitleText]}
          >{props.title}</Text>
        </View>

        <View>
          {props.button}
        </View>
      </View>

      <View
        style={Styles[theme].listItemSeparator}
      />
    </>
  );
}

export default SettingOption;
