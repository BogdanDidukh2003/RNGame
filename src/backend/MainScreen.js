import CONSTANTS from './../constants';

export const useMainScreenBackend = (navigation) => {

  const onPressStartGame = () => {
    navigation.navigate(CONSTANTS.SCREENS.GAME)
  };

  return {
    onPressStartGame,
  };
};
