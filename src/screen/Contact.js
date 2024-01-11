import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  bgImage,
  TextInput,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Image,
  Keyboard,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert, // Import Alert from react-native
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [mobile, setMobile] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [submitted, setSubmitted] = useState(false);
  // const [bgImage, setBgImage] = useState(require('../../assets/again.jpg'));
  const [containerHeight, setContainerHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setContainerHeight(Dimensions.get('window').height);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, [fadeAnim]);

  const handleSubmission = () => {
    if (!name || !email || !mobile || !query) {
      // Alert the user if any of the fields are empty
      Alert.alert('Please fill in all the details before submitting.');
      return;
    }

    setSubmitted(true);
    setBgImage(null);
  };

  const renderForm = () => (
    <Animated.View style={[styles.innerContainer, { opacity: fadeAnim, height: containerHeight }]}>
      <Image source={require('../../assets/cont.png')} style={styles.cont}></Image>
      <Text style={styles.title}>Get In Touch</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Your Query"
        value={query}
        onChangeText={(text) => setQuery(text)}
        multiline
      />
{/* <View style={{ backgroundColor:"red", width:"200" }}> <Text>hello</Text></View> */}
<View style={{width: '100%', height: '100%', background: '#197A93', boxShadow: '200px 200px 200px ', filter: 'blur(200px)'}}></View>
 
      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  const renderThankYou = () => (
    <View style={styles.thankYouContainer}>
      <Text style={styles.thankYouText}>Thank you!</Text>
      <View style={styles.line}></View>
      <Text style={styles.contactText}>
        We'll be in touch shortly by Email or Phone Provided By You!!
      </Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          navigation.navigate('First');
        }}
      >
        <Text style={styles.homeButtonText}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.overlay}>
          {submitted ? renderThankYou() : renderForm()}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor:'#13102C',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 230,
    borderTopLeftRadius:4,
    backgroundColor: 'rgba(76, 120, 186, 0.322)',
    width: '120%',
    marginTop: '90%',
  },
  title: {
    fontSize: 28,
    marginBottom: '1%',
    fontWeight: 'bold',
    color: '#000000',
    padding: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#000000',
    borderWidth: 4,
    borderRightWidth: 25,
    borderRadius:30,
    marginBottom: 15,
    paddingLeft: 20,
    fontSize:17,
    color: '#000',
    width: '85%',
    marginLeft: '7%',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    height: '6%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.8%',
    marginLeft: '14%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  thankYouContainer: {
    borderRadius: 40,
    backgroundColor: '#3e4cecff',
    width: '98%',
    height: '70%',
    padding: 20,
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 68,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: '20%',
  },
  line: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    marginVertical: 30,
    width: '90%',
  },
  contactText: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#2b488169',
    borderRadius: 15,
    height: '11%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  cont: {
    width: '62%',
    height: '22%',
    marginLeft: '10%',
    marginTop: '10%',
  },
});

export default Contact;
