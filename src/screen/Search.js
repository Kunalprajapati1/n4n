import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ImageBackground, Animated } from 'react-native';

const globalStyles = {
  text: {
    color: '#333',
  },
  backgroundColor: '#fff',
  primaryColor: '#09461b',
};

const ngoNames = [
  'Compassionate Connections ',
  'Hope Horizons Network',
  'Unity Upliftment Alliance',
  'Empowerment Endeavors Society',
  'Serenity Supporters Guild',
  'Radiant Hearts Outreach',
  'Tranquil Transformations Trust',
  'Joyful Journeys Association',
  'Resilience Radiance Group',
  'Beacon of Belonging Foundation',
  'Caring Communities Collective',
  'Inspire Impact Initiative',
  'Visionary Volunteers Vanguard',
  'Diverse Dreams Foundation',
  'Rays of Renewal Organization',
  'Positive Progress Partners',
  'Harmony Haven Association',
  'Transformative Trails Trust',
  'Empathy Evolution Foundation',
  'Pinnacle of Positivity Network',
  'Soulful Solutions Society',
  'Dreams Delivered Alliance',
  'Kindred Spirits Foundation',
  'Nurturing Nectar Network',
  'Radiant Resilience Society',
  'Hearts of Humanity Guild',
  'Hopeful Horizon Helpers',
  'United Uplift Union',
  'Elevate Every Soul Foundation',
  'Symphony of Service Society',
];

const ngoData = [
  { id: 1, location: 'garhi harsaru', description: 'NGOs act as catalysts for positive transformation, translating compassion into tangible improvements for communities. They serve as champions of empathy, tirelessly working to alleviate suffering and championing causes that promote human welfare.' },
  { id: 2, location: 'mehrauli', description: 'In a world overshadowed by challenges, NGOs emerge as beacons of hope, lighting up the darkest corners with their dedication to a brighter future.' },
  { id: 3, location: 'kishangarh', description: 'NGOs function as architects of advocacy, constructing bridges between societal problems and effective solutions.' },
  { id: 4, location: 'rajokri', description: 'NGOs conduct the orchestra of social service, harmonizing resources, expertise, and compassion to create a masterpiece of societal betterment.' },
  { id: 5, location: 'new colony', description: 'NGOs are the innovators, pushing boundaries and thinking outside the box to create solutions for the myriad challenges our world faces.' },
  { id: 6, location: 'Delhi', description: 'Ever-vigilant, NGOs stand as guardians, protecting and promoting the values of justice, equality, and human rights on the global stage.' },
  { id: 7, location: 'Gurgaon', description: 'They are pioneers, bravely venturing into uncharted territories of need, equipped with the tools of change and the spirit of progress.' },
  { id: 8, location: 'Haryana', description: 'NGOs function as skilled artisans, weaving the threads of support, cooperation, and care to create a resilient social fabric that can withstand the strains of adversity.' },
  { id: 9, location: 'Janakpuri', description: 'Picture NGOs as gardeners of progress, planting seeds of awareness, education, and empowerment that grow into forests of positive social change.' },
  { id: 10, location: 'Vikaspuri', description: 'NGOs are the innovators, pushing boundaries and thinking outside the box to create solutions for the myriad challenges our world faces.' },
  { id: 11, location: 'Mahipalpur', description: 'NGOs emerge as beacons of hope, lighting up the darkest corners with their dedication to a brighter future.' },
  { id: 12, location: 'Vasant Kunj', description: 'NGOs conduct the orchestra of social service, harmonizing resources, expertise, and compassion to create a masterpiece of societal betterment.' },
  { id: 13, location: 'South Extension', description: 'NGOs empower communities to overcome challenges and build a brighter future.' },
  { id: 14, location: 'Lajpat Nagar', description: 'In the tapestry of society, NGOs weave threads of compassion and positive change.' },
  { id: 15, location: 'Karol Bagh', description: 'NGOs stand as pillars of support, lifting communities towards progress.' },
  { id: 16, location: 'Paharganj', description: 'In the symphony of social change, NGOs play the melody of empathy and progress.' },
  { id: 17, location: 'Greater Kailash', description: 'NGOs are architects of hope, building bridges to a better future.' },
  { id: 18, location: 'Rohini', description: 'In the canvas of humanity, NGOs paint strokes of positive impact and change.' },
  { id: 19, location: 'Dwarka', description: 'NGOs are catalysts for transformation, turning empathy into action.' },
  { id: 20, location: 'Chandni Chowk', description: 'In the garden of humanity, NGOs plant seeds of change, nurturing a better tomorrow.' },
  { id: 21, location: 'Saket', description: 'NGOs are the architects of positive change, designing a better world for all.' },
  { id: 22, location: 'Nehru Place', description: 'In the journey of progress, NGOs pave the way with compassion and dedication.' },
  { id: 23, location: 'Vasanth Vihar', description: 'NGOs are the driving force behind social innovation, shaping a brighter future.' },
  { id: 24, location: 'Malviya Nagar', description: 'In the tapestry of humanity, NGOs thread the needle of compassion and equality.' },
  { id: 25, location: 'Okhla', description: 'NGOs stand as beacons of hope, guiding communities towards a better tomorrow.' },
  { id: 26, location: 'Green Park', description: 'In the orchestra of change, NGOs play the symphony of empathy and progress.' },
  { id: 27, location: 'Kalkaji', description: 'NGOs are the catalysts for social transformation, igniting change in every corner.' },
  { id: 28, location: 'Shahdara', description: 'In the journey of social upliftment, NGOs pave the path towards brighter horizons.' },
  { id: 29, location: 'Mayur Vihar', description: 'NGOs are the heartbeats of compassion, resonating with the pulse of positive change.' },
  { id: 30, location: 'Rajouri Garden', description: 'In the realm of societal progress, NGOs stand as guardians of justice and equality.' },
];

const NgoCard = ({ name, location, description, onPress, isSelected }) => {
  const cardStyle = isSelected ? styles.selectedCard : {};
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }
    ).start();
  }, [fadeAnim]);

  const animatedStyle = {
    
  };

  return (
    <Animated.View style={[styles.cardContainer, cardStyle, animatedStyle]}>
      <ImageBackground
        source={require('../../assets/download1.png')}
        style={styles.cardImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardLocation}>{location}</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>{description}</Text>
          <TouchableOpacity onPress={onPress} style={styles.viewButton}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const Search = () => {
  const [selectedNgo, setSelectedNgo] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleViewMore = (ngo) => {
    setSelectedNgo(ngo);
    console.log('View more details for:', ngo);
  };

  const filteredNgoData = ngoData.filter(
    (ngo) =>
      ngo.location.toLowerCase().includes(searchText.toLowerCase()) ||
      ngo.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('../../assets/donate.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or location"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          {filteredNgoData.map((ngo, index) => (
            <NgoCard
              key={ngo.id}
              name={ngoNames[index]}
              location={ngo.location}
              description={ngo.description}
              isSelected={selectedNgo && selectedNgo.id === ngo.id}
              onPress={() => handleViewMore(ngo)}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
    paddingTop: 60,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 32,
    marginTop: 15,
    marginBottom: 20,
    shadowColor: '#932f2f',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 50,
    position: 'relative',
    flexDirection: 'row',
  },
  selectedCard: {
    backgroundColor: '#9aefe5',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 32,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 52, 64, 0.728)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
   
    textAlign:'center',
    color: '#fff',
  },
  cardLocation: {
    fontSize: 16,
    fontWeight:'bold',
    marginTop: 8,
    textAlign:'center',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 3,
    color: '#fff',
  },
  viewButton: {
    backgroundColor: '#062b06',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Search;
