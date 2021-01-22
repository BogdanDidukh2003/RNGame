import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

const ProfileButton = (props) => {
  const { theme } = React.useContext(AppDataContext);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Text
        style={[Styles[theme].textStyle, Styles[theme].profileButton]}
      >&#128100;</Text>
    </TouchableOpacity>
  );
};

export default ProfileButton;
