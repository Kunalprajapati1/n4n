// Faltu.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Faltu = ({ navigation }) => { 
  const [searchText, setSearchText] = useState('');

  const [fontsLoaded] = useFonts({
    'Dbold': require('../../assets/fonts/DancingScript-Bold.ttf'),
    'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const products = [
    { category: 'Manure', name: 'Organic Compost', price: ' ₹1099', image: require('../../assets/download4.png') },
    { category: 'Manure', name: 'Cow Dung Fertilizer', price: '₹899', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Worm Castings', price: '₹1299', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Fish Emulsion', price: '₹1499', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Bat Guano', price: '₹1699', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Vegetable Seeds Mix', price: '₹599', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Flower Seeds Pack', price: '₹799', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Herb Seeds Collection', price: '₹699', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Fruit Seeds Assortment', price: '₹899', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Exotic Plant Seeds', price: '₹999', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Indoor Potted Plant', price: '₹1599', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Outdoor Flowering Plant', price: '₹1899', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Succulent Garden', price: '₹2299', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Bonsai Tree', price: '₹2599', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Tropical Palm', price: '₹2999', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Cactus Collection', price: '₹1999', image: require('../../assets/download3.png') },
  ];
  const products2 = [
    { category: 'Manure', name: 'Organic Compost', price: ' ₹1099', image: require('../../assets/download4.png') },
    { category: 'Manure', name: 'Cow Dung Fertilizer', price: '₹899', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Worm Castings', price: '₹1299', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Fish Emulsion', price: '₹1499', image: require('../../assets/download3.png') },
    { category: 'Manure', name: 'Bat Guano', price: '₹1699', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Vegetable Seeds Mix', price: '₹599', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Flower Seeds Pack', price: '₹799', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Herb Seeds Collection', price: '₹699', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Fruit Seeds Assortment', price: '₹899', image: require('../../assets/download3.png') },
    { category: 'Seeds', name: 'Exotic Plant Seeds', price: '₹999', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Indoor Potted Plant', price: '₹1599', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Outdoor Flowering Plant', price: '₹1899', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Succulent Garden', price: '₹2299', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Bonsai Tree', price: '₹2599', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Tropical Palm', price: '₹2999', image: require('../../assets/download3.png') },
    { category: 'Plants', name: 'Cactus Collection', price: '₹1999', image: require('../../assets/download3.png') },
  ];

  const renderProductLine = (category) => {
    const filteredProducts = products.filter(
      (product) =>
        product.category === category &&
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productLine}>
        {filteredProducts.map((product, index) => (
          <TouchableOpacity key={index} style={styles.productCard} onPress={() => showProductDetail(product)}>
            <ImageBackground source={product.image} style={styles.productImage}>
              <View style={styles.overlay}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const showProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };
  return (
    <ImageBackground
      source={require('../../assets/again.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="#000000" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              placeholderTextColor="#000000"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        <ScrollView>
          
         
          <Text style={styles.title}>Manure</Text>
          {renderProductLine('Manure')}
          
          <Text style={styles.title}>Seeds</Text>
          {renderProductLine('Seeds')}
          <Text style={styles.title}>Plants</Text>
          {renderProductLine('Plants')}
          <Text style={styles.title}>More</Text>
          {renderProductLine('Plants')}
          {renderProductLine('Manure')}
        
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '120%',
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginTop: '20%',
    borderWidth: 5,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000000',
  },
  productLine: {
    flexDirection: 'row',
    marginTop: 10,
  },
  productCard: {
    width: 230,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth:4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(60, 151, 136, 0.826)',
    padding: 10,
  },
  productName: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "Dbold",
  },
  productPrice: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: "Dbold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Faltu;
