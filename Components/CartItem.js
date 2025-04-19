import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({ image, price, rating }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>BURGER</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating} (3k+ Rating)</Text>
        </View>
        <View style={styles.anonymousTag}>
          <Text style={styles.anonymousText}>Anonymous</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityBtn}>
            <Icon name="add" size={20} color="#5C5CFF" />
          </TouchableOpacity>
          <Text style={styles.quantity}>02</Text>
          <TouchableOpacity style={styles.quantityBtn}>
            <Icon name="remove" size={20} color="#5C5CFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
  },
  anonymousTag: {
    backgroundColor: '#4CAF50',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  anonymousText: {
    color: 'white',
    fontSize: 10,
  },
  priceContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C5CFF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtn: {
    width: 24,
    height: 24,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});

export default CartItem;