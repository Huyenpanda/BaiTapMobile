import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  const categories = [
    {
      id: '1',
      name: 'Fresh Fruits & Vegetables',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/766/766215.png' },
    },
    {
      id: '2',
      name: 'Cooking Oil & Ghee',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/920/920133.png' },
    },
    {
      id: '3',
      name: 'Meat & Fish',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' },
    },
    {
      id: '4',
      name: 'Bakery & Snacks',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },
    },
    {
      id: '5',
      name: 'Dairy & Eggs',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075976.png' },
    },
    {
      id: '6',
      name: 'Beverages',
      image: { uri: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png' },
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBar}>
        <Text style={styles.searchText}>Find Products</Text>
      </TouchableOpacity>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchText: { color: '#888' },
  categoryList: { justifyContent: 'space-between' },
  categoryContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ExploreScreen;
