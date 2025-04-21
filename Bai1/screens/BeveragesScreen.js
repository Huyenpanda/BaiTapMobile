import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Diet Coke',
    volume: '355ml',
    price: '$1.99',
    image: 'https://i.imgur.com/JJvJ7Yd.png',
  },
  {
    id: '2',
    name: 'Sprite Can',
    volume: '325ml',
    price: '$1.50',
    image: 'https://i.imgur.com/6M513yP.png',
  },
  {
    id: '3',
    name: 'Apple & Grape Juice',
    volume: '2L',
    price: '$15.99',
    image: 'https://i.imgur.com/KX0J2Kg.png',
  },
  {
    id: '4',
    name: 'Orange Juice',
    volume: '2L',
    price: '$15.99',
    image: 'https://i.imgur.com/rQwPbDM.png',
  },
  {
    id: '5',
    name: 'Coca Cola Can',
    volume: '325ml',
    price: '$4.99',
    image: 'https://i.imgur.com/UO1kO4L.png',
  },
  {
    id: '6',
    name: 'Pepsi Can',
    volume: '330ml',
    price: '$4.99',
    image: 'https://i.imgur.com/VO1sZHo.png',
  },
];

export default function BeverageList() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.volume}>{item.volume}, Price</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Beverages</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  volume: {
    fontSize: 12,
    color: '#777',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#34c759',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
