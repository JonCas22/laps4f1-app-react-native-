import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import { Container, Tabs, Tab, TabHeading } from 'native-base';
import CalendarF1 from '@expo/samples/CalendarF1';
import { CalendarPC2 } from '@expo/samples';

export default function HomeScreen() {
  return (
    <Container>
      <ImageBackground source={require("../assets/images/fondoc.jpg")} style={{width: '100%', height: '100%'}}>
      <Tabs style={{marginTop: 30}}>
        <Tab heading={<TabHeading style={{ backgroundColor: '#000000' , }}><Text style={{color: '#02B0F3', fontFamily: 'f1-bold', fontSize: 18}}>LaPS4F1</Text></TabHeading>} activeTextStyle={{fontFamily: 'f1-wide', color: '#ffffff'}}>
            <CalendarF1/>
        </Tab>

        <Tab heading={<TabHeading style={{ backgroundColor: "#000000" }}><Text style={{color: '#00B244', fontFamily: 'f1-bold', fontSize: 18}}>LaPS4PC2</Text></TabHeading>}>
          <CalendarPC2/>
        </Tab>
      </Tabs>
      </ImageBackground>
    </Container>
    
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    fontFamily: "f1-wide"
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 0,
  },
  calendarImage: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 0,
  },
  flagImage: {
    width: 50,
    height: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  calendarContainer: {
    alignItems: 'center',
    width: ScreenWidth-30,
    padding: 15,
    borderLeftColor: "#02B0F3",
    borderTopColor: '#02B0F3',
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderTopRightRadius: 0,
    fontFamily: "f1-wide",
    backgroundColor: "#FDFDFD",
    borderRadius: 10,
    
  },
  calendarContainerPC: {
    alignItems: 'center',
    width: ScreenWidth-30,
    padding: 15,
    borderLeftColor: "#00B244",
    borderTopColor: '#00B244',
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderTopRightRadius: 0,
    fontFamily: "f1-wide",
    backgroundColor: "#FDFDFD",
    borderRadius: 10,
  },
  dateContainer:{
    alignItems: 'center',
    backgroundColor: "#C8C8C8",

  },
  dateText:{
    alignItems: 'center',
    fontFamily: "f1-wide",
    fontSize: 8,
    
  },
  welcomeCalendarText: {
    fontFamily: "f1-wide",
    textAlign: "center",
    color: "#ffffff",
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
    fontFamily: 'f1-regular'
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
    fontFamily: "f1-bold"
  },
  calendarText: {
    fontSize: 21,
    textAlign: 'center',
    fontFamily: "f1-bold"
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
});