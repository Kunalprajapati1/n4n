// ProductDetail.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity,ImageBackground, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(getRandomDeliveryDate());
  const Point = ({ text }) => (
    <View style={styles.pointContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.pointText}>{text}</Text>
    </View>
  );
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
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

  const handleReviewSubmit = () => {
    if (review.trim() !== '') {
      setReviews([...reviews, review]);
      setReview('');
      Alert.alert('Review Submitted', 'Thank you for your review!');
    } else {
      Alert.alert('Invalid Review', 'Please enter a valid review.');
    }
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
        
        <Text style={styles.productName}>{product.name} - Garden of eiden 100% Organic Loose Ready to use Low EC Cocopeat Soil Manure Potting Mixture, Husk  (10 kg, Powder)</Text>
        
        {/* <Text style={styles.more}>n</Text> */}
        <View style={styles.line}></View>

<Text style={styles.mini}>Minimum order Quantity: 2 </Text>
         <View style={styles.priceContainer}>
            <Text style={styles.star}>★ ★ ★ ★</Text>
        <Text style={styles.rati}>5,332 Ratings & 347 Reviews   </Text>
        </View>
        <Text style={styles.best}>Best price</Text>
        <View style={styles.priceContainer}>
  <Text style={styles.off}>66% off -</Text>
  <Text style={styles.cost}> ₹1799</Text>
  <Text style={styles.productPrice}>{product.price} </Text>
</View>
        
       

        <View style={styles.line2}></View>
        <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.del}>
Quantity : 5 Kg 
</Text><Text style={styles.kg}>5 kg</Text>
<View style={styles.line}></View>
<Text style={styles.deliveryInfo}>Free Delivery by 20 Jan, Saturday |  {'\n'}
if ordered before 12:59 AM</Text>
{/* <Ionicons source={require("Null")} size={24} color="#000000" style={styles.searchIcon} /> */}
<View style={styles.line}></View>



<View style={styles.pcontainer}>
      <Text style={styles.title}>Highlights</Text>
      <View style={styles.pointsContainer}>
      <Point text=" Potting Mixture, Husk" />
     
        <Point text="Used for Gardening, Growing of Plant, Seedling Of seeds, "></Point>
        <Point text="Germination of Seeds, soilless potting mix" />
        <Point text="Available as Powder" />
        <Point text="Packed in Bag" />
        <Point text="Pack of 1" />
      </View>
    </View>














          {/* Reviews Section */}
          <View style={styles.reviewsContainer}>
            <Text style={styles.sectionHeading}>Customer Reviews</Text>
            {/* {reviews.map((item, index) => (
              <Text key={index} style={styles.reviewText}>{item}</Text>
            ))} */}
            {/* Input for submitting reviews */}
            <TextInput
              style={styles.reviewInput}
              placeholder="Write a review..."
              multiline
              value={review}
              onChangeText={setReview}
            />
            <TouchableOpacity onPress={handleReviewSubmit} style={styles.submitReviewButton}>
              <Text style={styles.submitReviewButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
        <View>
   
        {/* <TouchableOpacity onPress={handleShowSimilarProducts} style={styles.showSimilarButton}>
          <Text style={styles.showSimilarButtonText}>Show Similar Products</Text>
        </TouchableOpacity> */}
        {/* <Text style={styles.deliveryInfo}>Estimated Delivery: {deliveryDate}</Text> */}
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
// marginTop:'%',
marginBottom:'1%',
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
  productDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  qualityInfo: {
    fontSize: 14,
    marginBottom: 10,
  },
 
  reviewsContainer: {
    marginTop: 120,
    // marginBottom:120,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Bold",
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  submitReviewButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitReviewButtonText: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    position: 'relative',
    borderTopWidth:35,
    borderBottomWidth:5,
    borderTopColor:'#1d6972b1',
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
    height: 330,
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
    fontSize: 12,
    marginTop:'4%',
    marginLeft:'3%',
    // padding:13,
    fontFamily:"Regular",
    
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    marginLeft:'3%',
    fontWeight:'bold',
  
   
    color: '#e74c3c',
    
  },
  off:{
fontSize:18,
marginLeft:'3%',
color:'green',
fontWeight:'bold',

  },
  mini:{
marginLeft:'5%',
marginBottom:'4%',
marginTop:'2%',



  },
  cost:{
    textDecorationLine: 'line-through',
    marginLeft:'1%',
    // marginTop:'2%',
    // paddingHorizontal:10,
   
   fontSize:17,
   color:'#0000008a',


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
    fontSize: 14,
    // marginTop:-70,
    marginLeft:'5%',
    color: '#2c3e50',
   
  },
  detailsContainer:{
backgroundColor:'white',
borderRadius:12,
borderWidth:2,
// height:'15%',
// marginBottom:'13%',


  },
  star:{

marginLeft:'4%',
fontSize:18,



  },

  best:{
backgroundColor:'green',
width:'25%',
height:21,
borderTopRightRadius:20,
marginLeft:'2%',
fontFamily:"Regular",
marginTop:'5%',
textAlign:'center',
color:'white',


  },

  rati:{
marginLeft:'2%',
marginTop:'0.9%',



  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 0.7,
    alignSelf:"center",
    // marginVertical: 30,
    marginBottom:'3%',
    marginTop:'3%',
    width: '100%',
  },
  line2: {
    borderBottomColor: '#000000',
    borderBottomWidth: 0.2,
    marginVertical: 30,
    marginBottom:'1%',
    marginTop:'0.58%',
    alignSelf:"center",
    width: '90%',
  },
  more:{

// textAlign:'center',
textAlignVertical:'top',
// fontFamily:"Regular",
textAlign:'center',


  },
  del:{
fontFamily:"Regular",
marginLeft:'6%',

  },

  kg:{
marginLeft:'9%',
marginTop:'4%',
borderWidth:1,
width:60,
textAlign:'center',
height:23,
fontFamily:'Regular',
marginBottom:'5%',

  },
  pcontainer: {
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:'11%',
  
  },
  pointsContainer: {
    marginLeft: 16,
  },
  pointContainer: {
    flexDirection: 'row',
  
   
  },
  bullet: {
    fontSize: 39,
    marginRight: 8,
  },
  pointText: {
    flex: 1,
    fontSize: 14,
    marginTop:17,
  },
});

export default ProductDetail;
