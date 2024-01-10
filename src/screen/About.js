import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const About = () => {

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>About Us</Text> */}
      </View>
      <View style={styles.scrollContent}>

        <TouchableOpacity onPress={() => showAlert('Efficient Bridge', 'Donation distribution organizations can now partner with food donors more efficiently, thanks to a recent development. The Efficient Bridge platform revolves around this link between the two groups and aims to streamline the process of getting surplus food to those who need it most from food donation to distribution. Real-time data analytics enable organizations to make informed decisions, strategically allocating resources where they are most needed. This not only minimizes food waste but also maximizes the positive impact on communities facing food insecurity,')}>
          <View style={styles.card}>
            <Image source={require('../../assets/home3.jpg')} style={styles.logo} />
            <Text style={styles.heading}>Efficient Bridge: Bridging the Gap for a Hunger-Free World</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('More', 'Eliminate waste, feed those in need. Such is our noble mission. Surplus food: collected, and volunteers engaged.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              Eliminate waste, feed those in need. Such is our noble mission. Surplus food: collected, and volunteers engaged.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Innovation in Blockchain', 'Innovation in the blockchain space offers a solution for supply chain transparency and the prevention of spoilage.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              Innovation in the blockchain space offers a solution for supply chain transparency and the prevention of spoilage.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Hub Online', 'The Collaboration Application for NGOs, Hub Online, serves as a central hub for effective communication and coordination among various organizations.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              The Collaboration Application for NGOs, Hub Online, serves as a central hub for effective communication and coordination among various organizations.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Distribution Optimization', 'Reducing waste and expanding the options for donations are just a couple of the benefits the new system offers. The system is set up to ensure that donations are widely distributed and there are plenty of options to choose from.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              Reducing waste and expanding the options for donations are just a couple of the benefits the new system offers. The system is set up to ensure that donations are widely distributed and there are plenty of options to choose from.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Driving Forces', 'Online attention, natural plant food, and convenient contributions were the driving forces behind the idea.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              Online attention, natural plant food, and convenient contributions were the driving forces behind the idea.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Promoting Eco-Friendly Agriculture', 'Promote eco-friendly agriculture to address waste and hunger. Impact is the goal. Approach distribution optimization holistically by minimizing waste. Tackle social and environmental issues to facilitate positive change.')}>
          <View style={styles.card}>
            <Text style={styles.section}>
              Promote eco-friendly agriculture to address waste and hunger. Impact is the goal. Approach distribution optimization holistically by minimizing waste. Tackle social and environmental issues to facilitate positive change.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Our Impact', `Since inception, we have rescued and distributed ${Math.floor(Math.random() * 1000)} tons of surplus food, providing meals for thousands of people in need.`)}>
          <View style={styles.card}>
            <Text style={styles.heading}>Our Impact</Text>
            <Text style={styles.section}>
              Since inception, we have rescued and distributed {Math.floor(Math.random() * 1000)} tons of surplus food, providing meals for thousands of people in need.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Future Goals', 'Our future goals include expanding our reach to new regions, implementing advanced technologies for better logistics, and collaborating with more food donors and NGOs.')}>
          <View style={styles.card}>
            <Text style={styles.heading}>Future Goals</Text>
            <Text style={styles.section}>
              Our future goals include expanding our reach to new regions, implementing advanced technologies for better logistics, and collaborating with more food donors and NGOs.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Special Announcement', 'Exciting news! We\'re launching a special campaign to raise awareness and funds. Join us in the #HungerFreeWorldChallenge and make a difference. Let\'s toppdaaging together for a hunger-free world!')}>
          <View style={styles.specialCard}>
            <Text style={styles.heading}>Special Announcement</Text>
            <Text style={styles.specialSection}>
              Exciting news! We're launching a special campaign to raise awareness and funds. Join us in the #HungerFreeWorldChallenge and make a difference. Let's toppdaaging together for a hunger-free world!
            </Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.card, { paddingTop: height * 0.1 }]}>
          <Text style={styles.heading}>Additional Information</Text>
          <Text style={styles.section}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna et ante iaculis efficitur. Integer et accumsan lectus.
          Lorem lorem</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#3498db',
    paddingTop: 45,
    alignItems: 'center',
    height: 70,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollContent: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  specialCard: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logo: {
    width: '100%',
    height: height * 0.15,
    marginBottom: 20,
  },
  heading: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    fontSize: width * 0.04,
    marginBottom: 12,
    textAlign: 'justify',
    color: '#555',
  },
  specialSection: {
    fontSize: width * 0.045,
    marginBottom: 12,
    textAlign: 'justify',
    color: '#333',
  },
});

export default About;
