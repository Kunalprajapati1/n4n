import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Profile = () => {
  const { width } = Dimensions.get('window');
  const containerWidth = width * 0.8;
  const fontSize = width < 600 ? 16 : 28;
  const marginValue = width < 600 ? 10 : 20;

  const [isDonor, setIsDonor] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [organization, setOrganization] = useState('');
  const [ngoCertificate, setNgoCertificate] = useState('');
  const [ngoImg, setNgoImg] = useState('');
  const [website, setWebsite] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleAction = () => {
    if (isLogin) {
      // Implement login logic here
      console.log('Login attempt');
    } else {
      // Implement signup logic here
      handleSignup();
    }
  };

  const toggleAction = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = () => {
    // Basic form validation
    if (
      !name ||
      !email ||
      !phone ||
      !otp ||
      !password ||
      !confirmPassword ||
      !address ||
      !pincode ||
      (!isDonor &&
        (!organization || !ngoCertificate || !ngoImg || !website || !socialMedia))
    ) {
      setError('All fields are required');
      return;
    }

    // Password matching validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Implement API call or other signup logic based on isDonor
    console.log(`${isDonor ? 'Donor' : 'NGO'} signed up!`);
  };

  return (
    <ImageBackground
      source={require('../../assets/don.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={[styles.overlay, { padding: marginValue }]}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={[styles.container, { width: containerWidth, padding: marginValue }]}>
            <View style={styles.sectionContainer}>
              <TouchableOpacity
                onPress={() => setIsDonor(true)}
                style={[styles.section, isDonor && styles.activeSection]}
              >
                <Text style={styles.sectionText}>Donor</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsDonor(false)}
                style={[styles.section, !isDonor && styles.activeSection]}
              >
                <Text style={styles.sectionText}>NGO</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.header, { fontSize }]}>{isDonor ? 'Donor' : 'NGO'} Profile</Text>

            {[
              // Common fields for both donors and NGOs...
              // { placeholder: 'Name', state: name, setState: setName },
              // { placeholder: 'Email', state: email, setState: setEmail, keyboardType: 'email-address' },
              // { placeholder: 'Phone', state: phone, setState: setPhone, keyboardType: 'phone-pad' },
              // { placeholder: 'OTP', state: otp, setState: setOtp, keyboardType: 'numeric' },
              // { placeholder: 'Password', state: password, setState: setPassword, secureTextEntry: true },
              // { placeholder: 'Confirm Password', state: confirmPassword, setState: setConfirmPassword, secureTextEntry: true },
              // { placeholder: 'Address', state: address, setState: setAddress },
              // { placeholder: 'Pincode', state: pincode, setState: setPincode, keyboardType: 'numeric' },
              // Fields specific to donors...
              ...(isDonor
                ? [
                    { placeholder: 'Name', state: name, setState: setName },
                    { placeholder: 'Email', state: email, setState: setEmail, keyboardType: 'email-address' },
                    { placeholder: 'Phone', state: phone, setState: setPhone, keyboardType: 'phone-pad' },
                    { placeholder: 'OTP', state: otp, setState: setOtp, keyboardType: 'numeric' },
                    { placeholder: 'Password', state: password, setState: setPassword, secureTextEntry: true },
                    { placeholder: 'Confirm Password', state: confirmPassword, setState: setConfirmPassword, secureTextEntry: true },
                    { placeholder: 'Address', state: address, setState: setAddress },
                    { placeholder: 'Pincode', state: pincode, setState: setPincode, keyboardType: 'numeric' },
                ]
                : []),
            ].map((field, index) => (
              <View key={index}>
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder={field.placeholder}
                  value={field.state}
                  onChangeText={(text) => field.setState(text)}
                  keyboardType={field.keyboardType || 'default'}
                  placeholderTextColor="#f1f2f3"
                  secureTextEntry={field.secureTextEntry || false}
                />
              </View>
            ))}

            {!isDonor && (
              // Fields specific to NGOs...
              <>
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="Organization Name"
                  value={organization}
                  onChangeText={(text) => setOrganization(text)}
                  placeholderTextColor="#ffffff"
                />
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="Organization E-mail"
                  value={organization}
                  onChangeText={(text) => setOrganization(text)}
                  placeholderTextColor="#ffffff"
                />
                 <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="Organization Phone"
                  value={organization}
                  onChangeText={(text) => setOrganization(text)}
                  placeholderTextColor="#ffffff"
                />
                 <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="OTP"
                  value={organization}
                  onChangeText={(text) => setOrganization(text)}
                  placeholderTextColor="#ffffff"
                />
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="NGO Certificate"
                  value={ngoCertificate}
                  onChangeText={(text) => setNgoCertificate(text)}
                  placeholderTextColor="#f6fbff"
                />
                 <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="NGO Certificate"
                  value={ngoCertificate}
                  onChangeText={(text) => setNgoCertificate(text)}
                  placeholderTextColor="#f6fbff"
                />
                 <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="NGO Certificate"
                  value={ngoCertificate}
                  onChangeText={(text) => setNgoCertificate(text)}
                  placeholderTextColor="#f6fbff"
                />
                 <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="NGO Certificate"
                  value={ngoCertificate}
                  onChangeText={(text) => setNgoCertificate(text)}
                  placeholderTextColor="#f6fbff"
                />
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="NGO Image"
                  value={ngoImg}
                  onChangeText={(text) => setNgoImg(text)}
                  placeholderTextColor="#fbfbfb"
                />
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="Website"
                  value={website}
                  onChangeText={(text) => setWebsite(text)}
                  placeholderTextColor="#ffffff"
                />
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder="Social Media"
                  value={socialMedia}
                  onChangeText={(text) => setSocialMedia(text)}
                  placeholderTextColor="#ffffff"
                />

              </>
            )}

            {[
              // { placeholder: 'Website', state: website },
              // { placeholder: 'Social Media', state: socialMedia },
            ].map((field, index) => (
              <View key={index}>
                <TextInput
                  style={[styles.input, { marginBottom: marginValue }]}
                  placeholder={field.placeholder}
                  value={field.state}
                  onChangeText={(text) => field.state(text)}
                  placeholderTextColor="#2c3e50"
                />
              </View>
            ))}

            <TouchableOpacity style={styles.signupButton} onPress={handleAction}>
              <Text style={styles.signupButtonText}>
                {isLogin ? 'Login' : 'Signup'}
              </Text>
            </TouchableOpacity>

            <Text style={styles.linkText} onPress={toggleAction}>
              {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    resizeMode: 'cover',
    // position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(29, 32, 179, 0.048)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  container: {
    backgroundColor: '#2c222200',
    borderRadius: 30,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 9,
  },
  sectionContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  section: {
    flex: 3,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1a1f1f',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeSection: {
    backgroundColor: '#2980b9',
  },
  sectionText: {
    color: 'white',
    fontSize: 18,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#171515',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default Profile;
