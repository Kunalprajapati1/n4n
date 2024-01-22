import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const Ngosss = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  const handleDonatePress = () => {
    if (!name || !email || !mobileNumber || !address || !city || !state || !pincode || !foodDescription) {
      Alert.alert('Fields are not filled');
    } else {
      Alert.alert(
        'Confirm Registration',
        'Are you Ready to distribute food to needy?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              Alert.alert(
                'Registration successful',
                'Our Nearby Team will contact you soon. Thank you for your contribution!',
                [
                  { text: 'OK', onPress: () => navigation.navigate('First') },
                ]
              );
            },
          },
        ]
      );
    }
  };

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
        <View style={styles.container}>
        <View style={styles.imageContainer}>
  <Image
    source={{
      uri:
        'https://images.unsplash.com/photo-1638547908152-a8406fc38d21?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }}
    style={styles.image}
  />
  <View style={styles.textOverlay}>
    <Text style={styles.texth}>
      {'\n'}
      DONATE FOOD
    </Text>
    <Text style={styles.texth2}>
    Give us all your necessary details and the nearest NGO will
                  come to pick your remaining food.
    </Text>
  </View>
</View>

             
          <Text style={styles.headerText}>Fill the following Information</Text>

          <Animatable.View animation="fadeIn" duration={2000} style={styles.inputContainer}>
            <Animatable.View animation="fadeIn" duration={2000} delay={200} style={styles.inputWrapper}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setName(text)}
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2500} delay={400} style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="abc@gmail.com"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={600} style={styles.inputWrapper}>
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="9818XXXXXX"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setMobileNumber(text)}
                keyboardType="phone-pad"
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={800} style={styles.inputWrapper}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setAddress(text)}
              />
            </Animatable.View>
            {/* <Animatable.View animation="fadeIn" duration={2000} delay={1000} style={styles.inputWrapper}>
              <Text style={styles.label}>Organization City</Text>
              <TextInput
                style={styles.input}
                placeholder="city"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setCity(text)}
              />
            </Animatable.View> */}
            {/* <Animatable.View animation="fadeIn" duration={2000} delay={1200} style={styles.inputWrapper}>
              <Text style={styles.label}>Organization State</Text>
              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setState(text)}
              />
            </Animatable.View> */}
            <Animatable.View animation="fadeIn" duration={2000} delay={1400} style={styles.inputWrapper}>
              <Text style={styles.label}>Pincode</Text>
              <TextInput
                style={styles.input}
                placeholder="Pincode"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setPincode(number)}
                keyboardType="phone-pad"
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={2000} delay={1600} style={styles.inputWrapper}>
              <Text style={styles.label}>What you want to Donate</Text>
              <TextInput
                style={styles.input}
                placeholder="Share anything (Optional)"
                placeholderTextColor="#00000087"
                onChangeText={(text) => setFoodDescription(text)}
              />
            </Animatable.View>
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={2000} delay={1800} style={styles.buttonContainer}>
            <View style={styles.buttonsColumn}>
              <TouchableOpacity style={styles.donateButton} onPress={handleDonatePress}>
                <Text style={styles.buttonText}>Donate</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('ButtonContainer')}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginTop: StatusBar.currentHeight,
    marginBottom:'9%',

  },
  image: {
    width: width,
    height: height * 0.3,
    marginTop:'25%',
    resizeMode: 'cover',
    borderWidth: 4,
    borderRadius:70,
    borderColor: '#3f373fff',
  },
  textOverlay: {
    position: 'absolute',
    top: '53%',
    borderRadius:40,
    backgroundColor:'#3e393f70',
    height:'70%',
    left: '52%',
    transform: [{ translateX: -width * 0.5 }, { translateY: -height * 0.1 }],
    alignItems: 'center',
  },
  texth: {
    fontSize: 39,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'DSemibold',
  },
  texth2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Regular',
    marginTop: 10,
  },
  imageText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ translateX: -width * 0.5 }, { translateY: -height * 0.1 }],
  },
  headerText: {
    fontSize: width * 0.1,
    fontFamily: 'DSemibold',
    marginBottom: height * 0.06,
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    width: width * 0.9,
    marginTop: height * 0.02,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor:'#6f106461',
    borderRadius: width * 0.04,
    padding: width * 0.03,
  },
  inputWrapper: {
    marginBottom: height * 0.02,
  },
  label: {
    color: 'white',
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
  },
  input: {
    height: height * 0.055,
    borderColor: '#ffffffff',
    borderWidth: 2,
    backgroundColor: '#ffffffff',
    fontFamily: 'Regular',
    borderRadius: width * 0.04,
    paddingLeft: width * 0.03,
    marginRight: width * 0.07,
    color: '#000000eb',
    fontSize: width * 0.04,
    marginLeft: width * 0.02,
    width: 'auto',
  },
  buttonContainer: {
    marginTop: height * 0.02,
    width: width * 0.9,
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
    backgroundColor: '#bb7bdb75',
    borderRadius: width * 0.07,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.23,
    alignItems: 'center',
    marginLeft: width * -0.05,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
});

export default Ngosss;
