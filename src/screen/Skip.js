// Import necessary modules
import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
 Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Linking,
  ScrollView, 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import * as Location from 'expo-location';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Component definition
const Skip = ({ navigation }) => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  // State variable for loading state
  const [loading, setLoading] = useState(false);

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
  const ngoData = require('../screen/location.json');
  const ngos = ngoData.ngos;

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Location permission not granted');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      Alert.alert('Permission Error', 'Please grant location permission to use this feature.');
    }
  };
  
  // Call this function before attempting to fetch location
  requestLocationPermission();

  // Function to handle donation press
  const handleDonatePress = async () => {
    if (!name || !email || !mobileNumber || !address || !pincode || !foodDescription) {
      Alert.alert("Fields are not filled");
    } else {
      try {
        setLoading(true);

       
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
          // Get user's current location
          const location = await Location.getCurrentPositionAsync({});
          const userCoordinates = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };

          // Get pincode based on user's location
          const pincodeFromLocation = await Location.reverseGeocodeAsync(userCoordinates);

          if (pincodeFromLocation && pincodeFromLocation.length > 0) {
            setPincode(pincodeFromLocation[0].postalCode || '');
          } else {
            Alert.alert('Pincode Not Found', 'Unable to fetch pincode from current location.');
          }

          // Find the nearest NGO
          let nearestNgo = null;
          let minDistance = Number.MAX_VALUE;

          ngos.forEach((ngo) => {
            const ngoDistance = calculateDistance(userCoordinates.latitude, userCoordinates.longitude, ngo.organizationLatitude, ngo.organizationLongitude);

            if (ngoDistance < minDistance) {
              minDistance = ngoDistance;
              nearestNgo = ngo;
            }
          });

          if (nearestNgo) {
            console.log('Nearest NGO:', nearestNgo.organizationName);
            console.log('Distance:', minDistance);
            
            // Proceed with the donation process and show the relevant information
            Alert.alert(
              "Donation Received",
              `Your Nearby NGO named - "${nearestNgo.organizationName}" will contact you soon. Thank you for your contribution!`,
              [
                { text: "OK", onPress: () => navigation.navigate('First') }
              ]
            );
          } else {
            Alert.alert('No NGOs Found', 'Unable to find nearby NGOs.');
          }

        } else {
          Alert.alert('Location Permission Denied', 'Please grant location permission to use this feature.');
        }
      } catch (error) {
        console.error('Error fetching location or NGO data:', error);
        Alert.alert('Error', `Failed to fetch data. ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  // Helper function to calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  // Component rendering
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
    >
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
      >
        < ScrollView style={styles.container}>
          {/* Status bar */}
          <StatusBar barStyle="light-content" backgroundColor="#120C2C" />

          {/* Header text */}
          <Text style={styles.headerText}>Donate the food with ease</Text>

          {/* Input boxes and labels */}
          <Animatable.View animation="fadeIn" duration={2000} style={styles.inputContainer}>
            <Animatable.View animation="fadeIn" duration={2000} delay={200} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setName(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2500} delay={400} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setEmail(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={600} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your mobile number"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setMobileNumber(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={800} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your address"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setAddress(text)}
              />
        </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1400} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your pincode"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setPincode(text)}
                value={pincode}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1600} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Describe the food"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setFoodDescription(text)}
              />
            </Animatable.View>
          </Animatable.View>

          {/* Button container */}
          <Animatable.View animation="fadeIn" duration={2000} delay={1800} style={styles.buttonContainer}>
            <View style={styles.buttonsColumn}>
              <TouchableOpacity
                style={styles.donateButton}
                onPress={handleDonatePress}
                disabled={loading}
              >
                <Text style={styles.buttonText}>{loading ? 'Donating...' : 'Donate'}</Text>
              </TouchableOpacity>

             
                
                <Image
            source={require('../../assets/upi2.png')}
            style={styles.htmlImage}
          /> 
             
              <TouchableOpacity onPress={initiatePayment} style={styles.payNowButton}>
            <Text style={styles.payNowButtonText}>Click to open UPI App</Text>
          </TouchableOpacity>
          <Text onPress={() => navigation.navigate('First')} style={styles.buttonText2}>Skip</Text>
            </View>
          </Animatable.View>
       </ScrollView>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  payNowButton: {
    backgroundColor: '#7B7DDB',
    borderRadius: width * 0.07,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.14,
    alignItems: 'center',
    marginLeft: width * -0.02,
    marginBottom:'3%',
    marginTop:'10%',
  },
  payNowButtonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
  htmlImage: {
    width: '90%',
    marginRight:'5%',
    height: 380,
    borderRadius: 38,
    marginTop:'5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#0e0634d6',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.12,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: 'white',
    textAlign: 'center',
    marginTop: StatusBar.currentHeight + height * 0.05,
  },
  inputContainer: {
    flex: 1,
    width: width * 0.9,
    marginLeft: width * 0.05,
  },
  inputWrapper: {
    marginBottom: height * 0.035,
  },
  input: {
    height: height * 0.065,
    borderColor: '#ffffffff',
    borderWidth: 2,
    borderRadius: width * 0.04,
    paddingLeft: width * 0.03,
    marginRight: width * 0.05,
    color: '#ffffffeb',
    fontSize: width * 0.04,
    marginLeft: width * 0.04,
    width: 'auto',
  },
  buttonContainer: {
    marginTop: height * 0.02,
    width: width * 0.9,
    marginLeft: width * 0.05,
  },
  buttonsColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textButton: {
    paddingVertical: height * 0.015,
    alignItems: 'center',
    marginBottom: height * 0.05,
    marginLeft: width * -0.03,
    fontWeight: 'bold',
  },
  donateButton: {
    backgroundColor: '#7B7DDB',
    borderRadius: width * 0.07,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.27,
    alignItems: 'center',
    marginLeft: width * -0.02,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
  buttonText2: {
    color: 'white',
    fontSize: width * 0.07,
    fontWeight:'bold',
    marginBottom:'2%',
  },
});

// Export the component
export default Skip;
