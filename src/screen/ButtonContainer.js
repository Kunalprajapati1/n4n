// ButtonContainer.js
import React, { useRef } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Reusable IconButton Component
const IconButton = ({ onPress, source, style, rotate }) => {
  const rotateValue = useRef(new Animated.Value(rotate ? 1 : 0)).current;

  const handlePress = () => {
    Animated.timing(rotateValue, {
      toValue: rotateValue._value === 0 ? 1 : 0, // Toggle between 0 and 1
      duration: 300,
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
      underlayColor="transparent" // No color change on press
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
      <IconButton onPress={() => navigateToPage('Home')} source={require('../../assets/home2.png')} />
      {/* New About Button */}
      <IconButton
        onPress={() => navigateToPage('Faltu')}
        source={require('../../assets/cart2.png')}
        style={styles.aboutButton}
      />
      <View style={styles.centerIconContainer}>
        <IconButton
          onPress={() => navigateToPage('Donate')}
          source={require('../../assets/donoicon2.png')}
          style={[styles.donateButton, styles.donateIcon]} // Apply additional styles
          rotate={true} // Rotate the "Donate" icon
        />
      </View>
      <IconButton
        onPress={() => navigateToPage('Search')}
        source={require('../../assets/search.png')}
        style={styles.searchButton}
      />
      <IconButton onPress={() => navigateToPage('Login')} source={require('../../assets/profile.png')} style={styles.profileButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c5b6eff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70,
    width: '100%',
    borderRadius: 0,
    marginTop: 539,
  },
  centerIconContainer: {
    flex: 1, // Take up remaining space
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    width: 70, // Adjusted width for smaller gaps
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    // backgroundColor: '#3498db',
    marginLeft: 5, // Adjusted marginLeft for smaller gaps
  },
  profileButton: {
    // backgroundColor: '#e74c3c',
    marginLeft: 5, // Adjusted marginLeft for smaller gaps
  },
  aboutButton: {
    // backgroundColor: '#9b59b6',
    marginLeft: 5, // Adjusted marginLeft for smaller gaps
  },
  donateIcon: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: '#045e74',
    marginBottom: 45,
  },
  icon: {
    width: 24,
    height: 28,
    tintColor: 'white',
  },
});

export default ButtonContainer;
