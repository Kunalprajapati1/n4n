import { useFonts } from "expo-font";
import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

const { width, height } = Dimensions.get("window");

const Again = () => {
  const [fontsLoaded] = useFonts({
    DSemibold: require("../../assets/fonts/DancingScript-SemiBold.ttf"),
    semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonWidth = width * 0.8;
  const buttonHeight = height * 0.07;

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  //       // Add other custom fonts if needed
  //     });
  //   };

  //   loadFonts();
  // }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  if (!fontsLoaded) {
    return null; // Or render a loading indicator
  }
  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Image
        source={require("../../assets/don.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.headerText}>
       
        <Text style={styles.headerRestOfText}>
        <Text style={{ fontFamily: "Regular",color: 'white' }}>
            
          Select yourself from below Category
            </Text>
        </Text>
      </View>
<View style={{ marginTop:70 }}>


      <TouchableOpacity
        onPress={() => navigateToPage("Skip")}
        style={{ ...styles.button, width: buttonWidth, height: buttonHeight }}
      >
        <Text style={styles.buttonText}>
        <Text style={{ fontFamily: "Regular",color: 'white' }}>
            
        Want to Donate ? 
            </Text>
        
        </Text>
      </TouchableOpacity>

      {/* <Text style={styles.text3}>OR</Text> */}

      <TouchableOpacity
        onPress={() => navigateToPage("Ngosss")}
        style={{ ...styles.button, width: buttonWidth, height: buttonHeight }}
      >
        <Text style={styles.buttonText2}>
        <Text style={{ fontFamily: "Regular",color: 'white' }}>
            
        JOIN AS NGOs ?
            </Text>
        
        </Text>
        
      </TouchableOpacity></View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
 
  
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: height * 5,
    height: width * 5,
  },
  text3: {
    color: "white",
    marginTop: "9%",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "rgba(190, 8, 8, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 9,
    lineHeight: 30,
    fontFamily: "Regular",
    
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight - 240,
    marginLeft: "15%",
    marginRight: "10%",
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginLeft: "19%",
    fontFamily: "Regular",
  },
  headerFirstLetter: {
    fontSize: 76, // Adjust the size as needed
    fontWeight: "bold",
    color: "#ffffffff",
    marginBottom: "24%",
    marginLeft: "3%",
    fontFamily: "Regular",
  },
  headerRestOfText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    // marginLeft: "1%",
    marginRight: "7%",
    textAlign: "center",
    // backgroundColor:"red",
    width: '100%',

  },
  button: {
    backgroundColor: "#7B7DDB",
    padding: 12,
    borderRadius: 25,
    marginTop: "6%",
    shadowColor: "#23546d",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 100,
  },
  
  buttonText: {
    color: "white",
    marginRight: 25,
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Regular",
  },
  buttonText2: {
    color: "white",
    marginRight: 25,
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 22,
    textAlign: "center",
  },
});

export default Again;
