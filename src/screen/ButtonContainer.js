// ButtonContainer.js
import React, { useRef } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Front from './Front';

// Reusable IconButton Component
const IconButton = ({ onPress, source, style, rotate }) => {
  const rotateValue = useRef(new Animated.Value(rotate ? 1 : 0)).current;

  const handlePress = () => {
    Animated.timing(rotateValue, {
      toValue: rotateValue._value === 0 ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => onPress());
  };

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableHighlight
      style={[styles.button, style]}
      onPress={handlePress}
      underlayColor="transparent"
    >
      <Animated.Image source={source} style={[styles.icon, { transform: [{ rotate: spin }] }]} />
    </TouchableHighlight>
  );
};

const ButtonContainer = () => {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.buttonContainer}>
          <IconButton onPress={() => navigateToPage('Home')} source={require('../../assets/home.gif')} />
          <IconButton
            onPress={() => navigateToPage('Faltu')}
            source={require('../../assets/shopping.gif')}
            style={styles.aboutButton}
          />
          <View style={styles.centerIconContainer}>
            <IconButton
              onPress={() => navigateToPage('Donate')}
              source={require('../../assets/donoicon2.png')}
              style={[styles.donateButton, styles.donateIcon]}
              rotate={true}
            />
          </View>
          <IconButton
            onPress={() => navigateToPage('Search')}
            source={require('../../assets/search.gif')}
            style={styles.searchButton}
          />
          <IconButton onPress={() => navigateToPage('Login')} source={require('../../assets/account.gif')} style={styles.profileButton} />
        </View>
      </View>

      <ScrollView>
        <Front />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    marginTop: '205%', // Fixed margin top for ButtonContainer
  },
  buttonContainer: {
    backgroundColor: '#000000ff',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    height: 70,
    width: '100%',
    borderRadius: 0,
    zIndex: 2, // Ensure the button container appears above other content
  },
  centerIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    marginLeft: 5,
  },
  profileButton: {
    marginLeft: 5,
  },
  aboutButton: {
    marginLeft: 5,
  },
  donateIcon: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: '#000000',
    marginBottom: 45,
  },
  icon: {
    width: 24,
    height: 28,
    tintColor: 'white',
  },
});

export default ButtonContainer;
