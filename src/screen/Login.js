import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // State to store user details
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const authenticatedUser = await authenticateUser(emailOrMobile, password);

     
      if (authenticatedUser) {
        console.log('Login successful:', authenticatedUser);

        // Update the user state
        setUser(authenticatedUser);

        // Navigate to the user profile page with user details
        navigation.navigate('Profiles', { user: authenticatedUser });
      } else {
        console.log('Login failed. Check your credentials.');
        // Handle login failure, show error message or anything else
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error, show error message or anything else
    }
  };

  const authenticateUser = (emailOrMobile, password) => {
    // Replace this with your actual authentication logic
    // For example, you might use Firebase, Auth0, or your own backend API
    // Return user details if authentication is successful, otherwise return null
    return new Promise((resolve) => {
      // Example: Simulate asynchronous authentication
      setTimeout(() => {
        // Replace this with your actual user object
        const user = { name: 'John Doe', email: 'john@example.com', mobile: '1234567890' };
        resolve(user);
      }, 2000); // Simulating a 2-second delay for demonstration purposes
    });
  };

  const openGmailAccounts = () => {
    // Dummy function for illustration, update as needed
    console.log('Opening Gmail accounts');
  };

  const loginWithFacebook = () => {
    // Dummy function for illustration, update as needed
    console.log('Logging in with Facebook');
  };

  const navigateToSignup = () => {
    navigation.navigate('Sign');
  };

  return (
    <ImageBackground
      // source={require('../../assets/again.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/login.png')} style={styles.logo} />
          <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Gmail/Mobile"
            placeholderTextColor="#333"
            value={emailOrMobile}
            onChangeText={(text) => setEmailOrMobile(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#333"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={openGmailAccounts}>
            <Image source={require('../../assets/google.png')} style={styles.icon} />
            <Text style={styles.loginButtonText}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={loginWithFacebook}>
            <Image source={require('../../assets/facebook.png')} style={styles.icon} />
            <Text style={styles.loginButtonText}>Login with Facebook</Text>
          </TouchableOpacity>

          <Text style={styles.text3}>Want to create an account?</Text>
          <TouchableOpacity style={styles.signupText} onPress={navigateToSignup}>
            <Text style={styles.lo2}>Sign up</Text>
          </TouchableOpacity></ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:'#6aacad8c',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  lo2:{
color:'#7242d8',
fontSize:18,
fontWeight:'bold',
textDecorationLine: 'underline',
textAlign:'center',


  },
  text3:{

marginTop:'8%',
fontSize:18,
textAlign:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '93%', // Adjusted width to make it visually appealing
    backgroundColor: 'rgba(76, 120, 186, 0.543)',
    borderRadius: 80, // Increased border-radius for a smoother look
    padding: 20,
    height:'75%',
    borderTopLeftRadius:2,
    alignItems: 'center',
  },
  logo: {
    height: 90,
    width: 90,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRightWidth: 22,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 35,
    padding: 10,
    marginBottom: 15,
    color: '#333',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRightWidth:18 ,
    borderRadius: 35,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#333',
  },
  signupText: {
    color: '#05166a',
    marginTop: 10,
  },
});

export default Login;
