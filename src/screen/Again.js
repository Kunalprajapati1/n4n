import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font'
const { width, height } = Dimensions.get('window');

const Again = () => {
  const navigation = useNavigation();

  const scrollToTop = () => {
    // Implement your logic to scroll to the top in React Native
  };

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
    // <ScrollView>
      <View style={{ backgroundColor: '#262f38', flex: 1 }}>
        {/* <ScrollView> */}
          <View style={{ flex: 1, flexDirection: 'column' ,}}>
            {/* Image takes half of the screen */}
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={{ flex: 1, height: height * 0.5, width: '100%' }}
              resizeMode="cover"
            />

            {/* Background color takes the other half */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(38, 47, 56, 0.5)', // Adjust the opacity as needed
                padding: 20,
              }}
            >
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                  style={{
                    borderColor: '#a2a1a1',
                    borderWidth: 3,
               
                    padding: 25,

                    height:'150%',
                    backgroundColor: 'rgba(0, 0, 0, 0.361)',
                  }}
                >
                  <Text style={{ fontSize: 29, color: 'white', textAlign: 'center' ,marginBottom:'10%',fontFamily:'Regular'}}>
                    Please tell us Who{' '}
                    <Text style={{ fontSize: 26 ,fontFamily:'Regular'}}>are you before moving forward :)</Text>
                  </Text>

                  <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ngos2')}>
                      <View style={buttonStyles}>
                        <Text style={buttonTextStyles}>Are you an NGO?</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Skip')}>
                      <View style={buttonStyles}>
                        <Text style={buttonTextStyles}>Do you want to donate / find NGO?</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        {/* </ScrollView> */}
      </View>
    // </ScrollView>
  );
};

const buttonStyles = {
  borderColor: '#a2a1a1',
  borderWidth: 2,
  marginBottom:'9%',
  backgroundColor: '#c0bccf4a',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
  borderRadius: 10,
  padding: 20,
  marginVertical: 13,
};

const buttonTextStyles = {
  fontSize: 24,
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Regular', // You can replace this with your custom font family
};

export default Again;
