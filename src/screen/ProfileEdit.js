
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,StatusBar, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';


const First = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = new Animated.Value(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [menuOpen, slideAnim]);

  const menuContainerStyle = {
    transform: [
      {
        translateX: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0], // Adjust the value as needed
        }),
      },
    ],
  };
  const navigation = useNavigation();
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    
    <View style={styles.screen}>
      
      <View style={styles.pageContainer}>
       <Image
        source={require('../../assets/don.png')} // Change to your image path
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon} activeOpacity={0.7}>
        <Text style={styles.menuText}>{menuOpen ? '' : '≡'}</Text>
      </TouchableOpacity>
      {menuOpen && (
        <Animated.View style={[styles.menuContainer, menuContainerStyle]}>
          {menuOpen && (
            <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon} activeOpacity={0.7}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          )}
          <View style={styles.menuContent}>
            <Text  onPress={() => navigateToPage('Home')} style={styles.menuItem}>Home</Text>
            <Text onPress={() => navigateToPage('Search')} style={styles.menuItem}>Search</Text>
            <Text onPress={() => navigateToPage('Donate')} style={styles.menuItem}>Donate</Text>
            <Text onPress={() => navigateToPage('Skip')} style={styles.menuItem}>Contact</Text>
            {/* Profile Photo Section inside the Menu */}
            <View style={styles.profileContainer}>
              <Image source={require('../../assets/iconn.png')} style={styles.profilePhoto} />
              <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
    


     
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  screen: {
    backgroundColor: '#ffffffc8',
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: '4%',
    right: 10,
    padding: 10,
    backgroundColor: 'transparent',
  },
  menuText: {
    color: 'white',
    fontSize: 80,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#165e7436',
    borderBlockColor:'blue',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: '5%',
    right: 10,
    padding: 10,
    backgroundColor: 'transparent',
  },
  closeText: {
    color: 'white',
    fontSize: 60,
  },
  menuContent: {
    alignItems: 'center',
    marginTop:"80%",
    
  },
  menuItem: {
    color: '#f9f9f9',
    fontSize: 20,
    marginVertical: 8,
  marginBottom:'10%',
  marginLeft:'22%',
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginTop:"80%",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: '5%',
    marginLeft:'22%',
  },
  profileText: {
    color: 'white',
    fontSize: 15,
    marginBottom:'120%',
    fontWeight:'bold',
    marginLeft:'22%',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // marginBottom:50,
  },
  loginButton: {
    backgroundColor: '#0D0F53',
    padding: 10,
    borderRadius: 5,
    width:'60%',
    height:'15%',
    marginLeft:'30%',

    borderRadius:25,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#0D0F53',
    padding: 10,
    marginLeft:'30%',
    borderRadius: 5,
    width:'60%',
    height:'15%',
    borderRadius:25,
    marginBottom:'70%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:10,
  },
  backgroundImage:{
width:'140%',
height:'140%',




  },
  navBar: {
    // Style your navigation bar here
    backgroundColor: '#a6bdb3c8',
    height: 50,
  },
  centeredButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  



 
 

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default First;
