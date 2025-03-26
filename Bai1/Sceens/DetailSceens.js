import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FoodDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Food Detail Screen</Text>
    </View>
  );
};

export const EditProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Fetch user data when the screen loads
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveProfile = async () => {
    try {
      // Save updated user data to AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      // Optional: Navigate back or show success message
      navigation.goBack();
    } catch (error) {
      console.log('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <Text>{userData.name}</Text>
        
        <Text>Email</Text>
        <Text>{userData.email}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.saveButton}
        onPress={handleSaveProfile}
      >
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#F9A826',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});