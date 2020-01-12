import React from 'react';
import 'firebase/firestore';
import { StandingsView, StandingsViewPC2 } from '@expo/samples';
import { ImageBackground, Text } from 'react-native';
import { Container, Tabs, Tab, TabHeading} from 'native-base';

export default function LinksScreen(){
 
  return(
    <Container>
      <ImageBackground source={require("../assets/images/fondoc.jpg")} style={{width: '100%', height: '100%'}}>
      <Tabs style={{marginTop: 30}}>
        <Tab heading={<TabHeading style={{ backgroundColor: "#000000" }}><Text style={{color: '#02B0F3', fontFamily: 'f1-bold', fontSize: 18}}>LaPS4F1</Text></TabHeading>} activeTextStyle={{fontFamily: 'f1-wide', color: '#ffffff'}}>
            <ImageBackground source={require("../assets/images/fondoc.jpg")} style={{width: '100%', height: '100%'}}>
              <StandingsView/>
            </ImageBackground>
        </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: "#000000" }}><Text style={{color: '#00B244', fontFamily: 'f1-bold', fontSize: 18}}>LaPS4PC2</Text></TabHeading>}>
            <ImageBackground source={require("../assets/images/fondoc.jpg")} style={{width: '100%', height: '100%'}}>
                <StandingsViewPC2/>
            </ImageBackground>
        </Tab>
      </Tabs>
      </ImageBackground>
    </Container>
    
    
  );

}

LinksScreen.navigationOptions = {
  header: null,
};

