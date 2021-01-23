import { StyleSheet } from 'react-native';

import CONSTANTS from './../constants';

const Styles = new Map();

Styles[CONSTANTS.THEMES.LIGHT] = StyleSheet.create({

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 120,
    backgroundColor: CONSTANTS.COLORS.GAME_MAIN,
    borderRadius: 13,
  },

  buttonText: {
    color: CONSTANTS.COLORS.MAIN_BACKGROUND,
    fontSize: 17,
  },

  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  elementContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  errorText: {
    width: '90%',
    textAlign: 'center',
    color: 'red',
  },

  gameContainer: {
    paddingBottom: '15%',
  },

  gameDescription: {
    color: CONSTANTS.COLORS.GAME_MAIN,
    fontSize: 18,
  },

  gameIconSquare: {
    backgroundColor: CONSTANTS.COLORS.GAME_MAIN,
    height: 50,
    width: 50,
    borderRadius: 12,
    margin: 3,
  },

  gameIconSquareEmpty: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    borderRadius: 7,
    margin: 7,
  },

  gameLogo: {
    color: CONSTANTS.COLORS.GAME_MAIN,
    fontSize: 40,
  },

  hyperlink: {
    color: CONSTANTS.COLORS.SKY_BLUE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  listItemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: CONSTANTS.COLORS.SILVER,
  },

  optionContainer: {
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  optionTitle: {
    width: '70%',
  },

  optionTitleText: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  profileButton: {
    fontSize: 24,
    color: CONSTANTS.COLORS.SKY_BLUE,
    marginRight: 8,
    marginBottom: 4,
  },

  profileContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: CONSTANTS.COLORS.BLACK_TEXT,
  },

  textInputError: {
    borderColor: 'red',
  },

  textStyle: {
    color: CONSTANTS.COLORS.BLACK_TEXT,
  },

  card: {
    margin: 5
  },

  cardFace: {
    borderRadius: 10,
  },

  cardFront: {
    backgroundColor: CONSTANTS.COLORS.CARD_BLUE,
  },

  cardCorrectBack: {
    backgroundColor: CONSTANTS.COLORS.CARD_WHITE,
  },

  cardIncorrectBack: {
    backgroundColor: CONSTANTS.COLORS.CARD_GREY_BLUE,
  },

  cardContainer: {
    backgroundColor: CONSTANTS.COLORS.CARD_BACKGROUND,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },

});

Styles[CONSTANTS.THEMES.DARK] = StyleSheet.create({

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 120,
    backgroundColor: CONSTANTS.COLORS.GAME_DARK,
    borderRadius: 13,
  },

  buttonText: {
    color: CONSTANTS.COLORS.DARK_BACKGROUND,
    fontSize: 17,
  },

  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  elementContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  errorText: {
    width: '90%',
    textAlign: 'center',
    color: 'red',
  },

  gameContainer: {
    paddingBottom: '15%',
  },

  gameDescription: {
    color: CONSTANTS.COLORS.GAME_DARK,
    fontSize: 18,
  },

  gameIconSquare: {
    backgroundColor: CONSTANTS.COLORS.GAME_DARK,
    height: 50,
    width: 50,
    borderRadius: 12,
    margin: 3,
  },

  gameIconSquareEmpty: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
    borderRadius: 7,
    margin: 7,
  },

  gameLogo: {
    color: CONSTANTS.COLORS.GAME_DARK,
    fontSize: 40,
  },

  hyperlink: {
    color: CONSTANTS.COLORS.LIGHT_ORANGE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  listItemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: CONSTANTS.COLORS.SILVER,
  },

  optionContainer: {
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  optionTitle: {
    width: '70%',
  },

  optionTitleText: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  profileButton: {
    fontSize: 24,
    color: CONSTANTS.COLORS.LIGHT_ORANGE,
    marginRight: 8,
    marginBottom: 4,
  },

  profileContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: CONSTANTS.COLORS.WHITE_TEXT,
  },

  textInputError: {
    borderColor: 'red',
  },

  textStyle: {
    color: CONSTANTS.COLORS.WHITE_TEXT,
  },

  card: {
    margin: 5
  },

  cardFace: {
    borderRadius: 10,
  },

  cardFront: {
    backgroundColor: CONSTANTS.COLORS.CARD_BLUE,
  },

  cardCorrectBack: {
    backgroundColor: CONSTANTS.COLORS.CARD_WHITE,
  },

  cardIncorrectBack: {
    backgroundColor: CONSTANTS.COLORS.CARD_GREY_BLUE,
  },

  cardContainer: {
    backgroundColor: CONSTANTS.COLORS.CARD_BACKGROUND,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },

});

export default Styles;
