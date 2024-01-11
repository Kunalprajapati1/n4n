import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Image, Animated, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading

  const navigation = useNavigation();

  const shouldAnimate = firstName === '' && lastName === '' && mobileNumber === '' && email === '' && password === '';

  const animatedValue = new Animated.Value(0);

  const fadeIn = () => {
    if (shouldAnimate) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  fadeIn();

  const handleSignup = async () => {
    if (loading) {
      return; // Do nothing if already in loading state
    }
  
    try {
      setLoading(true); // Set loading state to true
  
      if (firstName !== '' && lastName !== '' && mobileNumber !== '' && email !== '' && password !== '') {
        // Simulate async signup process (replace with your actual signup logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        // Log user details to the console
        console.log('User Details:', {
          firstName,
          lastName,
          mobileNumber,
          email,
          password,
        });
  
        // Display success alert
        Alert.alert(
          'Registration Successful',
          'You are successfully registered! Now login using your email/mobile and password.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        // Display an error alert if any field is empty
        Alert.alert('Error', 'Please fill in all fields.');
      }
    } catch (error) {
      // Handle error, display error message, etc.
      console.error('Signup failed:', error);
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    } finally {
      setLoading(false); // Set loading state back to false, whether successful or not
    }
  };
  

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      // source={require('../../assets/again.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Animated.View style={[styles.inputContainer, { opacity: animatedValue }]}>
          <Image source={require('../../assets/signup.png')} style={styles.logo} />
<ScrollView>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#000000"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#000000"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#000000"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000000"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000000"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" /> // Show loading spinner
            ) : (
              <Text style={styles.signupButtonText}>Sign Up</Text> // Show "Sign Up" text
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginText} onPress={navigateToLogin}>
            <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16, color: '#000ea3' }}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity></ScrollView>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#6aacad8c',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '95%',
    height:'85%',
    backgroundColor: 'rgba(76, 120, 186, 0.543)',
    borderRadius: 80,
   
    borderTopLeftRadius:2,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRightWidth:22,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.671)',
    borderRadius: 33,
    padding: 10,
    marginBottom: 23,
    color: '#ffffff',
  },
  signupButton: {
    backgroundColor: '#000000',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    
  },
});

export default Signup;
