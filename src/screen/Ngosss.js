// Importing necessary modules
import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native';
import {useFonts} from 'expo-font'
// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Component definition
const Ngosss = ({ navigation }) => {

  const [fontsLoaded] = useFonts({
    DSemibold: require("../../assets/fonts/DancingScript-SemiBold.ttf"),
    semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  // Function to handle donation press
  const handleDonatePress = () => {
    if (!name || !email || !mobileNumber || !address || !city || !state || !pincode || !foodDescription) {
      // Handle the case where fields are not filled
      Alert.alert("Fields are not filled");
    } else {
      // Show a different alert for successful donation
      Alert.alert(
        "Confirm Registration ",
        "Are you Ready to distribute food to needy?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Confirm", onPress: () => {
            Alert.alert(
              "Registration succesfull",
              "Our Nearby Team will contact you soon. Thank you for your contribution!",
              [
                { text: "OK", onPress: () => navigation.navigate('First') }
              ]
            );
          }}
        ]
      );
    }
  };

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
        <ScrollView style={styles.container}>
          {/* Status bar */}
          <StatusBar barStyle="light-content" backgroundColor="#120C2C" />
          <Image source={require('../../assets/again.jpg')} style={styles.backgroundImage} />
          {/* Header text */}
          <Text style={styles.headerText}>Collect Food without any Issues</Text>

          {/* Input boxes and labels */}
          <Animatable.View animation="fadeIn" duration={2000} style={styles.inputContainer}>
            <Animatable.View animation="fadeIn" duration={2000} delay={200} style={styles.inputWrapper}>
              
              <TextInput
                style={styles.input}
                placeholder="Organization name"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setName(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2500} delay={400} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Organization email"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setEmail(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={600} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Organization mobile number"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setMobileNumber(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={800} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Organization address"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setAddress(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1000} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Organization city"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setCity(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1200} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Organization state"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setState(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1400} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder=" Organization pincode"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setPincode(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1600} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Share anything (Optional)"
                placeholderTextColor="#ffffff87"
                onChangeText={(text) => setFoodDescription(text)}
              />
            </Animatable.View>
          </Animatable.View>

          {/* Button container */}
          <Animatable.View animation="fadeIn" duration={2000} delay={1800} style={styles.buttonContainer}>
            {/* Combined Donate and Skip buttons */}
            <View style={styles.buttonsColumn}>
              <TouchableOpacity
                style={styles.donateButton}
                onPress={handleDonatePress}
              >
                <Text style={styles.buttonText}>Ready to Collect</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.textButton}
                onPress={() => navigation.navigate('First')}
              >
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 3,
    resizeMode:'cover',
    position: 'absolute',
    height:'190%',
    width: '190%',
  
  },
  container: {
    flex: 1,
    backgroundColor: '#120C2C',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.1,
    fontFamily: "Dbold",
    marginBottom: height * 0.02,
    color: 'white',
    textAlign: 'center',
    marginTop: StatusBar.currentHeight + height * 0.05,
  },
  inputContainer: {
    flex: 1,
    width: width * 0.9,
    marginLeft: width * 0.04,
    
  },
  inputWrapper: {
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.065,
    borderColor: '#ffffffff',
    borderWidth: 2,
    fontFamily: "Regular",
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
    marginBottom: height * 0.025,
    marginLeft: width * -0.05,
    fontWeight: 'bold',
  },
  donateButton: {
    backgroundColor: '#7B7DDB',
    borderRadius: width * 0.07,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.23,
    alignItems: 'center',
    marginLeft: width * - 0.05,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
});

// Export the component
export default Ngosss;
