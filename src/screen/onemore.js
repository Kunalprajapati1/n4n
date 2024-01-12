// ProductDetail.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,ImageBackground, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(getRandomDeliveryDate());
  const [fontsLoaded] = useFonts({
    'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
    'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
  });
  const handleBuyNow = () => {
    if (validatePincode(pincode)) {
      // Perform the action to proceed with the purchase
      Alert.alert('Order Placed', `Product ${product.name} ordered successfully!`);
    } else {
      Alert.alert('Invalid Pincode', 'Please enter a valid pincode.');
    }
  };

  const handleAddToCart = () => {
    // Perform the action to add the product to the cart
    Alert.alert('Added to Cart', `Product ${product.name} added to the cart.`);
  };

  const handleShowSimilarProducts = () => {
    // Implement logic to show similar products
    Alert.alert('Similar Products', 'Displaying similar products...');
  };

  const handleMoreImages = () => {
    // Implement logic to show more images of the product
    Alert.alert('More Images', 'Displaying more images of the product...');
  };

  return (
    <ImageBackground
    source={require('../../assets/again.jpg')}
    style={styles.backgroundImage}
  >

    <ScrollView style={styles.container}>
       
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.space} />
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.space} />
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.space} />
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.space} />
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.space} />
      <Image source={product.image} style={styles.productImage} resizeMode="cover" />
      {/* Add more Images and spaces as needed */}
    </ScrollView>
      <View style={styles.detailsContainer}>
        
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        {/* <TextInput
          style={styles.pincodeInput}
          placeholder="Enter Pincode"
          keyboardType="numeric"
          onChangeText={setPincode}
        /> */}
        
        </View>
        
        
        <View>
   
        {/* <TouchableOpacity onPress={handleShowSimilarProducts} style={styles.showSimilarButton}>
          <Text style={styles.showSimilarButtonText}>Show Similar Products</Text>
        </TouchableOpacity> */}
        <Text style={styles.deliveryInfo}>Estimated Delivery: {deliveryDate}</Text>
        <Text style={styles.textt}> More Manure Options</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.productCard2} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage2}>
              <View style={styles.overlay2}>
                <Text style={styles.productName2}>{product.name}</Text>
                <Text style={styles.productPrice2}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </ScrollView>
          
      </View> 
     
    </ScrollView>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBuyNow} style={styles.buyNowButton}>
        <Text style={styles.buyNowButtonText}>Buy Now</Text>
      </TouchableOpacity>

      
    </View>
    </ImageBackground>
       
     
    
  );
};

const getRandomDeliveryDate = () => {
  // Implement logic to generate a random delivery date
  const deliveryDates = ['2 days', '3 days', '4 days', '5 days'];
  const randomIndex = Math.floor(Math.random() * deliveryDates.length);
  return deliveryDates[randomIndex];
};

const validatePincode = (pincode) => {
  // Implement pin code validation logic
  // For simplicity, let's assume a valid pin code has 6 digits
  return /^\d{6}$/.test(pincode);
};

const styles = StyleSheet.create({
    productCard2: {
        width: 230,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth:4,
        overflow: 'hidden',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // backgroundColor:'#6aacad8c',
        justifyContent: 'center',
        height: '120%',
        width: '100%',
      },
      textt:{
fontSize:24,
// marginTop:'7.5%',
marginBottom:'5%',
backgroundColor: '#8c13689e',
// borderRadius:52,
fontFamily:"Regular",
textAlign:'center',
borderWidth:3,
color:'white',

      },
      productImage2: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
      },
      overlay2: {
        backgroundColor: 'rgba(60, 151, 136, 0.826)',
        padding: 2,
      },
      productName2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "Dbold",
      },
      productPrice2:{
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
      },
      title2: {
        color: 'white',
        fontSize: 26,
        fontFamily: "Regular",
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
      },
  container: {
    flex: 1,
    
  },
  imageContainer: {
    position: 'relative',
    borderTopWidth:65,
    borderBottomWidth:5,
    backgroundColor:'white',
    // marginTop:'12%',
    width:'100%',
  },
  space: {
    width: 10, // Adjust the width to control the space between images
  },
  productImage: {
    flex: 1,
   
    width:270,
   marginLeft:30,
    height: 300,
    // marginRight:-30,

  },
//   moreImagesButton: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//   },
 
 
  productName: {
    fontSize: 16,
    padding:13,
    fontFamily:"Regular",
    
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    padding:12,
    
    color: '#e74c3c',
    marginBottom: 30,
  },
  pincodeInput: {
    height: 50,
    borderRadius:42,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    width:'90%',
    fontSize:16,
    marginLeft:12,
    padding: 10,
    textAlign:'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    height:65,
    borderWidth:2,
   
    justifyContent: 'space-between', // or use 'space-around' or 'space-evenly' for more spacing options
    // Add other container styles as needed
  },
  buyNowButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderWidth:1,
    width:'53%',
    // borderRadius: 5,
  },
  buyNowButtonText: {
    color: 'white',
    textAlign:'center',
    fontSize:16,
 
    marginTop:7,
    marginRight:22,
    fontWeight:'bold',
  },
  addToCartButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderWidth:1,
    width:'52%',
    borderRadius: 5,
    // marginLeft: 10, // Adjust the margin to control the space between buttons
  },
  addToCartButtonText: {
    color: '#000000',
    textAlign:'center',
    fontSize:16,
    marginTop:7,
    fontWeight:'bold',
  },
  showSimilarButton: {
    backgroundColor: '#e67e22',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  showSimilarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryInfo: {
    fontSize: 12,
    color: '#2c3e50',
    textAlign:'center',
  },
  detailsContainer:{
backgroundColor:'white',
borderRadius:12,
borderWidth:2,
height:'20%',
marginBottom:-20,


  },
});

export default ProductDetail;
