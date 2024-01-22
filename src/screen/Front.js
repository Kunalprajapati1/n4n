import React, { useRef, useEffect,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Front = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fadeInAnimation = (animatedValue) => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    };

    fadeInAnimation(fadeAnim1);
    fadeInAnimation(fadeAnim2);
  }, [fadeAnim1, fadeAnim2]);

  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  const [fontsLoaded] = useFonts({
    DSemibold: require("../../assets/fonts/DancingScript-SemiBold.ttf"),
    semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  const handleSubscribePress = () => {
    // Check if the email field is empty
    if (!email) {
      Alert.alert("Error", "Please enter your real email before subscribing.");
      return;
    }

    // Display an alert when the "Subscribe" button is pressed
    Alert.alert("Subscribe", "Thank you for subscribing! check your e-mail box for updates",);
    // You can add additional logic or API calls here for subscription handling
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Animated.Image
          style={{ ...styles.image, opacity: fadeAnim1 }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1654198340681-a2e0fc449f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <Animated.View style={{ ...styles.overlay, opacity: fadeAnim1 }}>
          <Text style={styles.overlayText}>
            Let's take a step forward in the initiative to prevent food wastage and supply it to those in need.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Donate')}>
              <Text style={styles.buttonText}>Donate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Ngosss')}>
              <Text style={styles.buttonText}>Ngo</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* New Container */}
        <View style={styles.bottomContainer}>
          <View style={styles.bottomOverlay}>
            <Text style={styles.bottomOverlayText1}>1.3 Billion Tons</Text>
          </View>
          <View style={styles.bottomOverlay2}>
            <Text style={styles.bottomOverlayText4}>
              According to the Food and Agriculture Organization, about 1.3 billion tons of food is wasted every year. The results of the study suggest that roughly one-third of food produced for human consumption is wasted globally.
            </Text>
          </View>
          <Image
            style={styles.bottomImage}
            source={require('../../assets/wastedfood.jpg')}
          />
        </View>

        {/* Added Text 1 */}
        <View>
          <Text style={styles.prob}>Problems Arising Because of Food Waste</Text>

          <Text style={styles.cli}>
            <Text style={styles.bold}>Climate Change:</Text> As previously mentioned, food wastage contributes to climate change by emitting methane as it decomposes in landfills. Methane is a potent greenhouse gas that has a more significant impact on global warming than carbon dioxide.
            {'\n\n'}

            <Text style={styles.bold}>Water Scarcity:</Text> The production of food requires a considerable amount of water, and when food is wasted, all of the water used in its production is also wasted. This puts additional pressure on already scarce water resources, especially in areas that are prone to droughts and water shortages.
            {'\n\n'}

            <Text style={styles.bold}>Land Use:</Text> Agriculture is one of the primary drivers of deforestation and habitat destruction, and food wastage puts additional pressure on these resources. This is because producing food requires large amounts of land, and when food is wasted, all of that land is also wasted.
            {'\n\n'}

            <Text style={styles.bold}>Biodiversity Loss:</Text> Food production is a leading cause of biodiversity loss, and when food is wasted, it worsens this problem. Agriculture uses large amounts of land and water, and food wastage puts additional pressure on these resources, leading to habitat destruction and loss of biodiversity.
            {'\n\n'}

            <Text style={styles.bold}>Resource Depletion:</Text> The production of food requires significant amounts of resources such as water, energy, and land. When food is wasted, all of these resources are also wasted, leading to their depletion.
            {'\n\n'}

            <Text style={styles.bold}>Health Risks:</Text> Food that is wasted can become a public health hazard if it is not disposed of properly. When food decomposes, it can attract pests such as rats and flies, which can spread diseases to humans.
          </Text>
        </View>

        {/* Added Text 2 */}
        <View>
          <Animated.Image
            style={{ ...styles.image, opacity: fadeAnim2 }}
            source={{
              uri:
                'https://images.unsplash.com/photo-1541327050432-73a9b9812047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
            }}
          />
          <Animated.View style={{ ...styles.overlay, opacity: fadeAnim2 }}>
            <Text style={styles.overlayText2}>
              But every problem has a cure :{'\n\n'} We have created a community which is actually a bridge for those
              who are actually want to donate but never find a platform to do so
              along with ones who want food, donations etc.
            </Text>
          </Animated.View>
        </View>

        {/* Added Text 3 */}
        <TouchableOpacity style={styles.button2} onPress={() => console.log('Ngo pressed')}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>

        {/* Added Text 4 */}
        {/* <Text style={styles.add}>Addressing Food Waste: Sharing Surplus Food for Good</Text> */}

        {/* Additional Section 1 */}
        <View>
          <Text style={styles.additionalHeading}>
            Addressing Food Waste: Sharing Surplus Food for Good
          </Text>
          <Image
            style={styles.additionalImage}
            source={require('../../assets/l.jpg')}
          />
          <Text style={styles.additionalText1}>
            Until now in our lives, everyone has come across moments in which
            we see a lot of food waste such as marriage, “langar”, Hotels,
            Restaurants, and our homes. So, collecting food from all these
            areas, and distributing the same to stray animals, and the needy,
            will cure the problem of food wastage to a great extent.
          </Text>
        </View>

        {/* Additional Section 2 */}
        {/* <View style={styles.additionalSection}>
          <View style={styles.additionalImageContainer}>
          <Image
            style={styles.additionalImage}
            source={require('../../assets/2.jpg')}
          />
          </View>
          <View style={styles.additionalTextContainer}>
            <Text style={styles.additionalText}>
              As ort food from the above-mentioned places can’t be given to
              humans, therefore, to minimize food wastage and cure the hunger
              problem in animals we will provide the ort to all the cowsheds,
              stray animals, especially cows, and dogs who are often seen on the
              roads eating plastic polybags, resulting in choking up themselves
              and finally leading to death.
            </Text>
          </View>
        </View> */}
        <View>
          <Text style={styles.additionalHeading}>
          Food Waste Reduction: Nourishing Animals in Need
          </Text>
          <Image
            style={styles.additionalImage}
            source={require('../../assets/d.jpg')}
          />
          <Text style={styles.additionalText2}>
          As ort food from the above-mentioned places can’t be given to
              humans, therefore, to minimize food wastage and cure the hunger
              problem in animals we will provide the ort to all the cowsheds,
              stray animals, especially cows, and dogs who are often seen on the
              roads eating plastic polybags, resulting in choking up themselves
              and finally leading to death.
          </Text>
        </View>

        {/* Additional Section 3 */}
        <View>
          <Text style={styles.additionalHeading}>
            Reducing Vegetable Waste: Feeding the Needy
          </Text>
          <Image
            style={styles.additionalImage}
            source={require('../../assets/2.jpg')}
          />
          <Text style={styles.additionalText3}>
            Along with it to fulfill the needs and desires of needy humans we
            will make sure that the vegetables which are often seen by vendors
            are thrown away just because of a few marks on vegetables or
            because they are left unsold will be provided to them.
          </Text>
        </View>

        <View style={styles.bottomContainer2}>
          <View style={styles.bottomOverlay}>
            <Text style={styles.bottomOverlayText2}>Do not miss any updates.
            Subscribe to the newsletter !!</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#ffffffff"
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.button3}  onPress={handleSubscribePress}>
              <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 390,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  overlayText: {
    color: '#ffffffff',
    fontSize: 23,

    textAlign: 'center',
   fontFamily:"Regular",
    marginBottom: 20,
    lineHeight:35,
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: '2%',
    marginRight: '3%',
    borderColor: '#a571a5',
    marginTop: '25%',
    padding: 8,
    backgroundColor: 'rgba(40, 3, 43, 0.852)',
  },
  overlayText2: {
    color: '#7fe4c2a4',
    fontSize: 18,
    textAlign: 'center',
   
    marginBottom: 20,
    // borderWidth: 3,
    borderRadius: 20,
    fontFamily:'Regular',
    marginLeft: '2%',
    marginRight: '3%',
    borderColor: '#a571a5',
    marginTop: '15%',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderColor: '#7e327e',
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 5,
    width: '40%',
  },
  button2: {
    backgroundColor: '#66c4a5',
    padding: 15,
    borderColor: '#7e327e',
    borderWidth: 2,
    borderRadius: 5,
 marginTop:'5%',
 marginLeft:'27%',
    width: '45%',
  },
   button3: {
    backgroundColor: '#000000',
    padding: 10,
    borderColor: '#7e327e',
    borderWidth: 2,
    // borderRadius: 20,
    marginBottom:'30%',
    
 marginTop:'5%',
 marginLeft:'22%',
    width: '55%',
  },
  buttonText: {
    color: 'white',
    fontFamily:"Regular",
    textAlign: 'center',
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: '#5492d9b1',
    padding: 20,
    marginTop: '15%',
  },

  bottomImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bottomOverlay: {
    marginTop: 10,
  },
  bottomOverlay2: {
    marginTop: 10,
    borderWidth: 2,
    marginBottom: '20%',
    marginLeft:'4%',
    marginRight:'4%',
  },
  bottomOverlayText1: {
    color: '#000000',
    fontSize: 52,
    textAlign: 'left',
    fontFamily:'Regular',
    marginBottom:'16%',
  },
  bottomOverlayText4: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'Regular',
    lineHeight:30,
    
  },
  bottomContainer2: {
    backgroundColor: '#789bc9',
    padding: 20,
    marginTop: '15%',
  },
  bottomOverlayText2: {
    color: '#000000',
    fontSize: 45,
    textAlign: 'center',
    fontFamily:'Dbold'
  },

  prob: {
    fontSize: 38,
    marginTop: '22%',
    textAlign: 'left',
    fontFamily:"Regular",
    marginLeft: '5%',
  },
  cli: {
    fontSize: 15,
    marginTop: '12%',
    textAlign: 'justify',
    fontFamily:"Regular",
    lineHeight:30,
    marginLeft: '10%',
    marginRight: '10%',
  },
  bold: {
    fontWeight: 'bold',
    fontSize:20,
  },

  // Added styles for additional sections
  additionalHeading: {
    fontSize: 28,
    // fontWeight: 'bold',
    fontFamily:"Regular",
    marginVertical: 70,
    marginLeft:'4%',
  },
  additionalSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  additionalImageContainer: {
    flex: 1,
  },
  additionalImage: {
    width: '85%',
    height: 250,
  
    marginBottom:'15%',
    marginLeft:'7%',
    borderWidth:3,
    borderColor:'#59e8f3'
  },
  additionalTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  additionalText1: {
    fontSize: 16,
    padding:15,
    borderColor:'#153562',
    lineHeight: 35, 
    borderWidth:3,
    fontFamily:"Regular",
    borderRadius:15,
backgroundColor:'#48abb281',
    marginLeft:'10%',
    marginRight:'10%',
    textAlign: 'center',
  },
  additionalText2: {
    fontSize: 16,
    padding:15,
    borderColor:'#153562',
    lineHeight: 35, 
    fontFamily:"Regular",
    borderWidth:3,
    borderRadius:15,
backgroundColor:'#15356274',
    marginLeft:'10%',
    marginRight:'10%',
    textAlign: 'center',
  },
  additionalText3: {
    fontSize: 16,
    padding:15,
    borderColor:'#153562',
    lineHeight: 35, 
    fontFamily:"Regular",
    borderWidth:3,
    borderRadius:15,
backgroundColor:'#101d266f',
    marginLeft:'10%',
    marginRight:'10%',
    textAlign: 'center',
  },
  add: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    fontFamily:"Regular",
    height: 50,
    borderColor: '#000000ff',
    borderWidth: 4,
    textAlign:'center',
    backgroundColor:'#dcd7d750',
   borderRadius:10,
   marginTop:'20%',
    // paddingLeft: width * 0.03,
    // marginRight: width * 0.05,
    color: '#ffffffeb',
    // fontSize: width * 0.04,
    // marginLeft: width * 0.04,
    width: '99%',
  },
});

export default Front;
