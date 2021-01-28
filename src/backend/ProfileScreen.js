import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import CONSTANTS from './../constants';
import { firebase } from './../logic';
import { AppDataContext } from './../util';

const onPressSignOut = () => {
  Alert.alert('Sign Out', 'Are you sure?', [
    {
      text: 'No',
      onPress: () => { },
      style: 'cancel',
    },
    {
      text: 'Yes',
      onPress: () => firebase.signOut(),
    },
  ],
    { cancelable: false });
};

export const useProfileScreenBackend = (navigation) => {
  const { userIsSignedIn } = React.useContext(AppDataContext);
  const [name, setName] = useState('');

  useEffect(() => {
    if (userIsSignedIn) {
      firebase.getUserData((userDoc) => {
        setName(userDoc.data().name);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [userIsSignedIn])

  const onPressSignIn = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_IN);
  };

  const onPressSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
  };

  return {
    name,
    onPressSignIn,
    onPressSignUp,
    onPressSignOut,
  };
};
