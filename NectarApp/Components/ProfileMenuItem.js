import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileMenuItem = ({ title, iconName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name={iconName} size={24} color="#333" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default ProfileMenuItem;