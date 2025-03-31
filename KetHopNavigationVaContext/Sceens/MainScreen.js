import React, { useContext } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../Components/AppContext.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ExplorerScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="location-outline" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#888" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.categoryHeaderContainer}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="funnel-outline" size={18} color="#f90" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  }} 
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Pizza</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }} 
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Burgers</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image 
            source={{ uri:  'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}} 
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Steak</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image 
            source={{ uri:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  }} 
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Pasta</Text>
        </View>
      </ScrollView>
      
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.itemsContainer}>
        {/* Popular Items */}
        <View style={styles.foodItemRow}>
          <View style={styles.foodItem}>
            <Image 
              source={{ uri:  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  }} 
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 1</Text>
              <Text style={styles.foodVendor}>By Viet Nam</Text>
              <Text style={styles.foodPrice}>1$</Text>
            </View>
          </View>
          
          <View style={styles.foodItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  }} 
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 2</Text>
              <Text style={styles.foodVendor}>By Italian</Text>
              <Text style={styles.foodPrice}>3$</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.foodItemRow}>
          <View style={styles.foodItem}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>10% OFF</Text>
            </View>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }} 
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 3</Text>
              <Text style={styles.foodVendor}>By Viet Nam</Text>
              <Text style={styles.foodPrice}>5$</Text>
            </View>
          </View>
          
          <View style={styles.foodItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  }} 
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 4</Text>
              <Text style={styles.foodVendor}>By Thai</Text>
              <Text style={styles.foodPrice}>2$</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

export const ProfileScreen = () => {
  const { userProfile, setIsLoggedIn } = useContext(AppContext);
  
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsLoggedIn(false);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };
  
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileBanner} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Hung Nguyen</Text>
          <Text style={styles.profileTitle}>Mobile developer</Text>
          <Text style={styles.profileBio}>
            I have above 5 years of experience in native mobile apps development, now I am learning React Native
          </Text>
          
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  // Main screens styles
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchBarContainer: {
    flexDirection: 'row',
    margin: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categoryHeaderContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 4,
    color: '#f90',
  },
  categoriesContainer: {
    height: 1,

    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 0,
    flexDirection: 'row',
  },
  categoryItem: {
    
    marginRight: 12,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 10,
  },
  viewAllText: {
    color: '#f90',
  },
  itemsContainer: {
    height:"50%",
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: "10%",

  },
  foodItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 1,
  },
  foodItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  foodImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  foodDetails: {
    padding: 12,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodVendor: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  // Profile screen styles
  profileContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    flex: 1,
  },
  profileBanner: {
    height: 130,
    backgroundColor: '#00BFFF',
  },
  profileInfo: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileTitle: {
    fontSize: 16,
    color: '#00BFFF',
    marginBottom: 16,
  },
  profileBio: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  signOutButton: {
    backgroundColor: '#F9A826',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
  },
  signOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});