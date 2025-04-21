import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const SelectLocationScreen = () => {
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (zone && area) {
      navigation.navigate('Home');
    } else {
      alert('Please select both zone and area');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>{'<'}</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://img.icons8.com/color/96/000000/map-marker.png' }}
        style={styles.mapImage}
      />

      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={zone}
          onValueChange={(itemValue) => setZone(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Zone" value="" />
          <Picker.Item label="Banasree" value="Banasree" />
          <Picker.Item label="Dhanmondi" value="Dhanmondi" />
        </Picker>
      </View>

      <Text style={styles.label}>Your Area</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={area}
          onValueChange={(itemValue) => setArea(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Types of your area" value="" />
          <Picker.Item label="Block A" value="Block A" />
          <Picker.Item label="Block B" value="Block B" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  backButton: { marginBottom: 10 },
  backArrow: { fontSize: 24 },
  mapImage: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  label: { fontSize: 14, fontWeight: '500', marginBottom: 5 },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10, // Added padding for better UX
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'white', fontSize: 16 },
});

export default SelectLocationScreen;
