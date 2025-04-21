import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Cho icon tìm kiếm và giỏ hàng

const HomeScreen = () => {
  const navigation = useNavigation();

  const exclusiveOffers = [
    { id: '1', name: 'Organic Bananas', unit: '7pcs, Priceg', price: '$4.99', image: { uri: 'https://pickrandom.com/assets/images/random-fruits-generator/Avocado_01.png' } },
    { id: '2', name: 'Red Apple', unit: '1kg, Priceg', price: '$4.99', image: { uri: 'https://pickrandom.com/assets/images/random-fruits-generator/Durian_01.png' } },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={styles.card}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemUnit}>{item.unit}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
   <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Beverage')}>
   <Text style={styles.logo}>🥕</Text>
  <View style ={styles.location}>
  <Ionicons name="location-outline" size={18} color="#000" />
  <Text style={styles.locationText}>Dhaka, Banassre</Text>
  </View>
  
</TouchableOpacity>


      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>

      {/* Banner */}
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/046/816/733/small/fruit-on-a-yellow-table-design-background-object-on-the-table-random-fruit-frame-border-free-photo.jpg' }}
        style={styles.banner}
      />

      {/* Exclusive Offer Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
   <FlatList
  data={exclusiveOffers}
  renderItem={renderItem}
  numColumns={2}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
  contentContainerStyle={{ paddingVertical: 10 }}
/>
     <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best selling</Text>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => navigation.navigate('Beverage')}>
  <Text style={styles.seeAll}>see all</Text>
</TouchableOpacity>

      </View>
   <FlatList
  data={exclusiveOffers}
  renderItem={renderItem}
  numColumns={2}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
  contentContainerStyle={{ paddingVertical: 10 }}
/>
     <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best selling</Text>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => navigation.navigate('Beverage')}>
  <Text style={styles.seeAll}>see all</Text>
</TouchableOpacity>

      </View>
   <FlatList
  data={exclusiveOffers}
  renderItem={renderItem}
  numColumns={2}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
  contentContainerStyle={{ paddingVertical: 10 }}
/>



      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    marginTop: 50,
    flexDirection: 'collumn',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500'
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f2f3f2',
    margin: 20,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1
  },
  banner: {
    height: 150,
    marginHorizontal: 20,
    borderRadius: 15,
    resizeMode: 'cover'
  },
  sectionHeader: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  seeAll: {
    fontSize: 14,
    color: '#53B175'
  },
  listContainer: {
    paddingLeft: 20,
    paddingVertical: 10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3
  },
  itemImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5
  },
  itemUnit: {
    fontSize: 12,
    color: '#888',
    marginTop: 2
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardFooter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: '#53B175',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default HomeScreen;
