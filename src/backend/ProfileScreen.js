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
  const [bestScore, setBestScore] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    if (userIsSignedIn) {
      firebase.getUserData((userDoc) => {
        setName(userDoc.data().name);
      }).catch((error) => {
        console.error(error);
      });
      const unsubscribe = firebase.collectionReference
        .doc(firebase.auth.currentUser.uid)
        .onSnapshot(bestScoreSynchronizationCallback);
      return () => {
        unsubscribe();
      };
    }
  }, [userIsSignedIn])

  const bestScoreSynchronizationCallback = (userDoc) => {
    const userBestScore = userDoc.data().bestScore;
    if (userBestScore) {
      setBestScore(userBestScore);
    }
  };

  const onPressSignIn = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_IN);
  };

  const onPressSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
  };

  return {
    bestScore,
    name,
    onPressSignIn,
    onPressSignUp,
    onPressSignOut,
  };
};
