import { useState, useEffect } from 'react';
import CONSTANTS from '../constants';

import {
  firebase,
  validateEmailInput,
  validateNameInput,
  validatePasswordInputOnSignUp,
} from './../logic';

export const useSignUpScreenBackend = (navigation) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [
    forcedPasswordErrorHighlight,
    setForcedPasswordErrorHighlight] = useState(false);

  const [requestSignUp, setRequestSignUp] = useState(false);

  useEffect(() => {
    if (requestSignUp && !(emailError || nameError || generalError)) {
      handleSignUp();
    }
    setRequestSignUp(false);
  }, [requestSignUp, emailError, nameError, passwordError, generalError]);

  const _validateSignUpInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validateNameInput(name, setName, setNameError);
    validatePasswordInputOnSignUp(
      password, repeatPassword, setPasswordError, setRepeatPasswordError,
      setForcedPasswordErrorHighlight);
  };

  const onPressSignUp = () => {
    setGeneralError(CONSTANTS.MESSAGES.DEFAULT);
    _validateSignUpInput();
    setRequestSignUp(true);
  };

  const handleSignUp = async () => {
    try {
      await firebase.signUp(email, name, password).then(() => {
        navigation.navigate(CONSTANTS.SCREENS.PROFILE);
      });
    } catch ({ message }) {
      setGeneralError(message);
    }
  };

  const onChangeEmail = (email) => {
    if (emailError) {
      validateEmailInput(email, setEmail, setEmailError);
    }

    setEmail(email);
  };

  const onChangeName = (name) => {
    if (nameError) {
      validateNameInput(name, setName, setNameError);
    }

    setName(name);
  };

  const onChangePassword = (password) => {
    if (passwordError) {
      validatePasswordInputOnSignUp(
        password, repeatPassword, setPasswordError, setRepeatPasswordError,
        setForcedPasswordErrorHighlight);
    }

    setPassword(password);
  };

  const onChangeRepeatPassword = (repeatPassword) => {
    if (repeatPasswordError) {
      validatePasswordInputOnSignUp(
        password, repeatPassword, setPasswordError, setRepeatPasswordError,
        setForcedPasswordErrorHighlight);
    }

    setRepeatPassword(repeatPassword);
  };

  return {
    email,
    name,
    password,
    repeatPassword,
    emailError,
    nameError,
    passwordError,
    repeatPasswordError,
    generalError,
    forcedPasswordErrorHighlight,
    onChangeEmail,
    onChangeName,
    onChangePassword,
    onChangeRepeatPassword,
    onPressSignUp,
  };
};
