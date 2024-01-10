import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      headerText: 'Slide 1 Header',
      buttonText: 'Register for Slide 1',
    },
    {
      headerText: 'Slide 2 Header',
      buttonText: 'Register for Slide 2',
    },
    {
      headerText: 'Slide 3 Header',
      buttonText: 'Register for Slide 3',
    },
    {
      headerText: 'Slide 4 Header',
      buttonText: 'Register for Slide 4',
    },
    {
      headerText: 'Slide 5 Header',
      buttonText: 'Register for Slide 5',
    },
  ];

  const onButtonPress = () => {
    if (swiperRef.current.index === slides.length - 1) {
      swiperRef.current.scrollBy(0); // Scroll to the first slide
    } else {
      swiperRef.current.slideNext(); // Scroll to the next slide
    }
  };

  return (
    <View>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.divider} />
        <Text style={styles.headerText}>
          <Text style={styles.boldText}> Know about the services we provide to the arising problems </Text>
        </Text>
      </View>

      {/* Swiper Section */}
      <View style={styles.swiperSection}>
        <Swiper
          ref={swiperRef}
          autoplay
          autoplayTimeout={3}
          loop={false}
          style={styles.swiper}
          showsPagination={false}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <View style={styles.slideContent}>
                <Image
                  source={require('../../assets/sys2.jpg')}
                  style={styles.slideImage}
                />
                <View style={styles.slideOverlay}>
                  <Text style={styles.slideHeaderText}>
                    {slide.headerText}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={onButtonPress} // Scroll to the next slide
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        {slide.buttonText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
};
  

const styles = StyleSheet.create({
  headerSection: {
    transform: [{ translateY: 0 }],
    width: '100%',
    paddingVertical: 9,
  },
  divider: {
    width: width - 40,
    height: 2,
    marginVertical: 8,
    transform: [{ translateX: 20 }],
    backgroundColor: '#CCCCCC',
    marginBottom: 90,
    marginTop: -10,
  },
  headerText: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#333333',
    transform: [{ translateX: -50 }],
    backgroundColor: '#059669',
    left: '25%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  swiperSection: {
    transform: [{ translateY: 20 }],
    paddingVertical: 16,
  },
  swiper: {
    height: 900,
  },
  slide: {
    width: width - 40,
    marginHorizontal: 20,
  },
  slideContent: {
    position: 'relative',
  },
  slideImage: {
    opacity: 0.5,
    borderRadius: 130,
    height: 350,
    width: '100%',
  },
  slideOverlay: {
    marginTop: -320,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  slideHeaderText: {
    position: 'absolute',
    width: '80%',
    marginTop: 20,
    marginLeft: '10%',
    height: 60,
    fontSize: 18,
    color: '#4a1010',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    position: 'absolute',
    width: '40%',
    marginTop: 200,
    marginLeft: '30%',
    alignItems: 'center',
  },
  button: {
    borderRadius: 25,
    height: 40,
    width: '80%',
    backgroundColor: '#1a3a8bdc',
    overflow: 'hidden',
    marginBottom: 10,
  },
  buttonText: {
    transform: [{ translateX: 10 }, { translateY: 5 }],
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
