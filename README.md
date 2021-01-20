# RNGame

## University course: Mobile Development

### About

React Native Game

## First time?

Refer to [React Native Documentation](https://reactnative.dev/docs/environment-setup) for environment setup

### Set up VS Code as React Native IDE (optional)

Go to Extensions(Ctrl+Shift+X)

Install following packages:

<code>React Native Tools</code>

<code>ES7 React/Redux/GraphQL/React-Native snippets</code>

Additional UI packages:

<code>vscode-icons</code>

## Project Structure

<code>src</code> is the directory for development:

- src
  - <code>backend</code> - for screen backend logic
  - <code>components</code> - for reusable components
  - <code>config</code> - for configuration files
  - <code>constants</code> - for set of constants
  - <code>logic</code> - for written functions and api
  - <code>navigation</code> - for navigation setup
  - <code>screens</code> - for screen user interface
  - <code>styles</code> - for reusable styles
  - <code>util</code> - for main utilities
  - <code>App.js</code> - entry point

## Running the mobile application

Download required dependencies with:
<code>npm install</code>

Start application:

1. Connect your device

2. Start a development server with:
<code>npx react-native start</code>

3. Install application on your device with:
<code>npx react-native run-android --no-jetifier</code>

**_IMPORTANT!_** In order to use Firebase, make sure you created configuration file at <code>src/config/firebaseConfig.json</code>.
Link at <code>firebaseConfig.json</code> is [here](https://drive.google.com/file/d/1xVT5dpGZOkWg86aBBJD_QECR5b_M4bob/view?usp=sharing)

## Development Requirements

### Commits

Clearly explain new features and/or main changes in commit meassages.
Also follow [the commit convention](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

