import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font'
const { width, height } = Dimensions.get('window');

const Again = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonWidth = width * 0.8;
  const buttonHeight = height * 0.07;

  const [fontsLoaded] = useFonts({
    'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
    'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
    
  })
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Image source={require('../../assets/again.jpg')} style={styles.backgroundImage} />

      <View style={styles.headerText}>
        <Text style={styles.headerFirstLetter}>S</Text>
        <Text style={styles.headerRestOfText}>
 elect yourself from below Category</Text>
      </View>

      <TouchableOpacity onPress={() => navigateToPage('Skip')} style={{ ...styles.button, width: buttonWidth, height: buttonHeight }}>
        <Text style={styles.buttonText}>Want to Donate ? </Text>
      </TouchableOpacity>

      <Text style={styles.text3}>OR</Text>

      <TouchableOpacity onPress={() => navigateToPage('Ngosss')} style={{ ...styles.button, width: buttonWidth, height: buttonHeight }}>
        <Text style={styles.buttonText2}>Join as NGOs ?</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    height: '170%',
  },
  text3: {
    color: 'white',
    marginTop: '9%',
    fontSize: 22,
    fontFamily: "Regular",
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(190, 8, 8, 0.75)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 9,
    lineHeight: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight - 240,
    marginLeft:'15%',
    marginRight:'10%',
    fontSize: 48,
    fontFamily: "Dbold",

    color: 'white',
    marginLeft: '19%', 
  },
  headerFirstLetter: {
    fontSize: 76, // Adjust the size as needed
    // fontWeight: 'bold',
    color: '#ffffffff',
    fontFamily: "Dbold",
    marginBottom:'29%',
    marginLeft:'3%',
  },
  headerRestOfText: {
    fontSize: 34,
    fontFamily: "Dbold",
    color: 'white',
    marginLeft: '1%',
    marginRight:'2%',
    
  },
  button: {
    backgroundColor: '#7B7DDB',
    padding: 12,
    borderRadius: 25,
    marginTop: '6%',
  },
  buttonText: {
    color: 'white',
    marginRight: 25,
    fontFamily: "Regular",
    marginLeft: 30,
    fontSize: 23,
    textAlign: 'center',
  },
  buttonText2: {
    color: 'white',
    marginRight: 25,
    fontFamily: "Regular",
    marginLeft: 30,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Again;