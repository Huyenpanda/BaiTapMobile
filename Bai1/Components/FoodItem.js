import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FoodItem = ({ title, image, rating, isFeatured }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      {isFeatured && (
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {isFeatured && (
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating} (3k+ Rating)</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  discountTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#5C5CFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
  },
});

export default FoodItem;