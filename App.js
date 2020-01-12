import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'f1-wide': require('./assets/fonts/Formula1-Wide.ttf'),
      'f1-regular': require('./assets/fonts/Formula1-Regular.ttf'),
      'f1-bold': require('./assets/fonts/Formula1-Bold.ttf'),
    }),
  ]);
  
}

function render() {
  return (
      <View style={styles.container}>
        {places.map((place) =>
            <View>
              <Text>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>)}
      </View>
  );
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

function _loadDatabase(){
  firebaseConfig = {
    apiKey: "AIzaSyC0dfH_C1kpisc72YZUCEWZ_9pvN7HtRYU",
    authDomain: "laps4f1-b894f.firebaseapp.com",
    projectId: "laps4f1-b894f",
    databaseURL: "https://laps4f1-b894f.firebaseio.com",
    storageBucket: "laps4f1-b894f.appspot.com"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

