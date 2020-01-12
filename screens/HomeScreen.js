import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ExpoAlertView } from '@expo/samples';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'expo';

export default function HomeScreen() {
  return (
    <ImageBackground source={require("../assets/images/home.jpg")} style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <View style={styles.homeContainer}>
            <View style={styles.centerContainer}>
              <Image source={ require("../assets/images/LaPS4F1.png")} style={styles.homeImage}/>
              <Text style={styles.homeText}>LAPS4F1{"\n"}EDICION VIII</Text>
            </View>
          </View>
          <View style={styles.homeContainer2}>
          <ExpoAlertView/>
          </View>
          <View style={{flexDirection: 'row', width: ScreenWidth, justifyContent: 'center', alignItems: 'center',}}>

            <TouchableOpacity  onPress={() => Linking.openURL('https://twitter.com/laps4f1?s=20')}><Image source={ require("../assets/images/twitter.png")} style={styles.shareLinks}/></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UC0fascTyuSX9ikZTc1k146Q')}><Image source={ require("../assets/images/youtube.png")}  style={styles.shareLinks}/></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://campeonatolaps4f1.wixsite.com/laps4f1')}><Image source={ require("../assets/images/web.png")}  style={styles.shareLinks}/></TouchableOpacity>

          </View>
      </ScrollView>

        
      
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeImage: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
  },
  homeContainer: {
    height: ScreenHeight,
    width: ScreenWidth,
  },
  homeContainer2: {
    width: ScreenWidth,
  },
  centerContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  homeText: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "f1-wide",
    color: "#ffffff"
 },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  shareLinks:{
    marginRight: 20,
    width: 50,
    height: 50,
  },
});
