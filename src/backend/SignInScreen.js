import { useState, useEffect } from 'react';

import CONSTANTS from './../constants';
import {
  firebase,
  validateEmailInput,
  validatePasswordInput,
} from './../logic';

export const useSignInScreenBackend = (navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [requestSignIn, setRequestSignIn] = useState(false);

  useEffect(() => {
    if (requestSignIn && !(emailError || passwordError || generalError)) {
      handleSignIn();
    }
    setRequestSignIn(false);
  }, [requestSignIn, emailError, passwordError, generalError]);

  const handleSignIn = async () => {
    try {
      firebase.signIn(email, password).then(() => {
        navigation.navigate(CONSTANTS.SCREENS.PROFILE);
      });
    } catch ({ message }) {
      setGeneralError(message);
    }
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setGeneralError('');
    });
  }, [navigation]);

  const _validateSignInInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validatePasswordInput(password, setPasswordError);
  };

  const onPressSignIn = () => {
    setGeneralError('');
    _validateSignInInput();
    setRequestSignIn(true);
  };

  const onPressGoToSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
  };

  const onChangeEmail = (email) => {
    if (emailError) {
      validateEmailInput(email, setEmail, setEmailError);
    }

    setEmail(email);
  };

  const onChangePassword = (password) => {
    if (passwordError) {
      validatePasswordInput(password, setPasswordError);
    }

    setPassword(password);
  }

  return {
    email,
    password,
    emailError,
    passwordError,
    generalError,
    onChangeEmail,
    onChangePassword,
    onPressSignIn,
    onPressGoToSignUp,
  };
};
