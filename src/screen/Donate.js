import React, { useState } from 'react';
import {
  View,StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Linking, // Import Linking for opening UPI app
} from 'react-native';
import { useFonts } from 'expo-font';
const Donate = () => {
  const { width, height } = Dimensions.get('window');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhnNum] = useState('');
  const [message, setMessage] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const animatedValue = new Animated.Value(0);

  const [fontsLoaded] = useFonts({
    'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
    'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
  });



  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const initiatePayment = () => {
    const upiId = 'skparjapati125@okicici'; // Your UPI ID
    const brandName = 'Need4Need'; // Your brand name
    const amount = '21.00'; // Amount in INR (if applicable)
    // const message="donate for something good";

    const paymentUrl = `upi://pay?pa=${upiId}&pn=${brandName}&am=${amount}&cu=INR`;


    Linking.openURL(paymentUrl)
      .then((res) => {
        // Payment app opened successfully
      })
      .catch((err) => {
        // Handle error (e.g., UPI app not installed)
      });
  };

  const submitDonate = async () => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      address === '' ||
      pincode === '' ||
      message === ''
    ) {
      alert('Please fill out all the fields!!');
    } else {
      // Handle the submission logic here

      setName('');
      setEmail('');
      setPhnNum('');
      setAddress('');
      setPincode('');
      setMessage('');
      alert('We will contact you soon!');
      startAnimation(); // Start the animation on successful submission
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#315e4c" />
      <Image
        source={require('../../assets/sys2.jpg')}
        style={styles.backgroundImage}
      />
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity,
          },
        ]}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>Donate Food</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Your Name*"
            placeholderTextColor="#000000"
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Your Email*"
            placeholderTextColor="#000000"
          />
          <TextInput
            value={phone}
            onChangeText={(text) => setPhnNum(text)}
            style={styles.input}
            placeholder="Phone Number*"
            placeholderTextColor="#000000"
          />
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
            placeholder="Address with Pincode*"
            placeholderTextColor="#000000"
          />
          <TextInput
            value={pincode}
            onChangeText={(text) => setPincode(text)}
            style={styles.input}
            placeholder="Pincode*"
            placeholderTextColor="#000000"
          />
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.messageInput}
            placeholder="Tell us about the food you want to donate*"
            placeholderTextColor="#000000"
            multiline
          />
          <TouchableOpacity onPress={submitDonate} style={styles.button}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.htmlContainer}>
          {/* <Text style={styles.htmlText}>
            Scan and make a donation to support our cause. Togethyer, we can make a difference in the lives of those in need.
          </Text> */}
         
          <Image
            source={require('../../assets/upi2.png')}
            style={styles.htmlImage}
          /> 
           <TouchableOpacity onPress={initiatePayment} style={styles.payNowButton}>
            <Text style={styles.payNowButtonText}>Pay with UPI</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 60,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dataContainer: {
    margin: 20,
   
    padding: 20,
    backgroundColor: '#ffffffff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 44,
  fontFamily:'Dbold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 38,
    fontFamily:'Regular',
    padding: 12,
    marginBottom: 16,
    color: '#000000',
  },
  messageInput: {
    fontSize: 16,
    fontFamily:'Regular',
    backgroundColor: '#f7f7f7',
    borderRadius: 28,
    padding: 12,
    marginBottom: 20,
    color: '#333',
    height: 120,
  },
  button: {
    backgroundColor: '#1eac81bd',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 28,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily:'Regular',
  },
  htmlContainer: {
    margin: 20,
    alignItems: 'center',
  },
  htmlText: {
    fontSize: 18,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  htmlImage: {
    width: 300,
    height: 350,
    borderRadius:38,
  },
  payNowButton: {
    backgroundColor: '#288166b6',
    // paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 38,
    marginTop: 60,
    marginBottom:'9%',
    width:'70%',
    height:'9%',
  },
  payNowButtonText: {
    color: 'white',
    marginTop:'6%',
    fontSize: 14,
 fontFamily:'Regular',
  },
});

export default Donate;