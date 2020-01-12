import React from 'react';
import { ExpoDriverView } from '@expo/samples';
import { ImageBackground } from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <ImageBackground  source={require("../assets/images/loginf1.jpg")} style={{width: '100%', height: '100%'}}>
      <ExpoDriverView/>
    </ImageBackground>
  )
}

SettingsScreen.navigationOptions = {
  header: null,
};
