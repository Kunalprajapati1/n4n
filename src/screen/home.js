import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font'
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Started');
    }, 4500);
    return () => clearTimeout(timer);
  }, []);
  const [fontsLoaded] = useFonts({
    'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
    'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
    
  })
  return (
    <ImageBackground   
      source={require('../../assets/ka.png')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      }}
    >
      <View style={styles.overlay}>
        <Animatable.Text animation="fadeInDown" duration={7500} style={styles.text2}>
          Need4Need
        </Animatable.Text>
        <Animatable.Image
          animation="zoomIn"
          duration={2000}
          source={require('../../assets/logoo.png')}
          style={styles.logo}
        />
        <Animatable.Text animation="fadeInUp" duration={1500} style={styles.text1}>
          A Need for you all from you all
        </Animatable.Text>
      </View>

      <Svg height={width * 0.4} width={width * 0.4} style={styles.circle}>
        {/* <Circle cx={width * 0.2} cy={width * 0.2} r={width * 0.2} fill="#114a1bff" /> */}
      </Svg>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: width * 0.06,
    textAlign: 'center',
    marginTop: -width * 0.02,
    fontFamily:'DSemibold',
  },
  logo: {
    width: '100%',
    height: height * 0.6,
    resizeMode: 'contain',
    marginBottom: -height * 0.1,
    borderRadius: 2,
    backgroundColor: '#f0f0f000',
    marginTop: -height * 0.1,
  },
  text2: {
    color: 'white',
   fontFamily:'DSemibold',
    fontSize: width * 0.14,
    marginBottom: -width * 0.02,
  },
  circle: {
    position: 'absolute',
    top: '5%',
    left: '10%',
    marginTop: -width * 0.2,
    backgroundColor: '#19633800',
    marginLeft: -width * 0.2,
    borderRadius: width * 0.2,
  },
});

export default Home;
