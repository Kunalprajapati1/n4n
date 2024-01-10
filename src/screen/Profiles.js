import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = ({ route }) => {
  // Assuming user details are passed through navigation
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.detail}>Name: {user.name}</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Mobile Number: {user.mobile}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Profile;
