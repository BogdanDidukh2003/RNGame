import React, { useEffect, useState } from 'react';

import CONSTANTS from './../constants';
import { firebase } from './../logic';
import { AppDataContext } from './../util';

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

  const onPressSignOut = () => {
    firebase.signOut();
  };

  return {
    name,
    onPressSignIn,
    onPressSignUp,
    onPressSignOut,
  };
};
