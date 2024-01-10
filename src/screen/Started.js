import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {useFonts} from 'expo-font'

const { width, height } = Dimensions.get('window');

const Started = () => {
const [fontsLoaded] = useFonts({
  'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
  'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
  'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
  'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
  'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
  'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
  
})


if(!fontsLoaded){
  return null;
}

  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#7b7ddb" /> */}
      <Image
        source={require('../../assets/start2.png')}
        style={styles.started}
      />
       
      <View style={styles.overlay}>
        <Animatable.Text animation="fadeIn" duration={5000} style={styles.text1}>
        
        <Text style ={{ fontFamily: "Regular",color: 'white' }}>Let's unite to end global food waste!</Text>
      
        {/* <Text style ={{ fontFamily: "Dbold",color: 'white' }}>Hello</Text>
        <Text style ={{ fontFamily: "Dregular",color: 'white' }}>Hello</Text>
        <Text style ={{ fontFamily: "DMedium",color: 'white' }}>Hello</Text>
        <Text style ={{ fontFamily: "DSemibold",color: 'white' }}>Hello</Text> */}
          
        </Animatable.Text>
        <Animatable.Text animation="fadeIn" duration={5000} delay={600} style={styles.text2}>
        <Text style ={{ fontFamily: "Regular",color: 'white' }}>Start with Need4Need</Text>
          
        </Animatable.Text>
        <TouchableOpacity onPress={() => navigateToPage('Again')} style={styles.button}>
          <Animatable.Text animation="bounceIn" duration={1000} style={styles.buttonText}>
            <Text style ={{ fontFamily: "Regular",color: 'white' }}>Donate Now</Text>
          </Animatable.Text>
          <Text style={styles.arrow }>➜</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  started: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    marginTop: height * 0.48,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#7B7DDB',
    padding: width * 0.03,
    width: width * 0.7,
    height: height * 0.07,
    borderRadius: height * 0.035,
    marginTop: height * 0.07,
  },
  text1: {
    color: 'white',
    fontSize: width * 0.1,
    marginTop: height * 0.13,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    marginTop: height * 0.04,
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    marginRight: width * 0.1,
    marginBottom: 1,
    marginLeft: width * 0.15,
    fontSize: width * 0.05,
    marginTop:'0.9%',
    fontWeight:'bold',
  },
  arrow: {
    color: 'white',
    fontSize: width * 0.059,
    marginTop:'0%',
marginRight:'0.2%',
fontWeight:'bold',
  },
});

export default Started;
