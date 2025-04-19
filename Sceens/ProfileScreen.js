import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileMenuItem from '../Components/ProfileMenuItem';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/AvartarImage.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editProfileButton}>
              <Icon name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Rakibul Hasan</Text>
          <Text style={styles.profileEmail}>rakibhbrand@gmail.com</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <ProfileMenuItem title="Home" iconName="home" />
          <ProfileMenuItem title="My Card" iconName="credit-card" />

          <View style={styles.darkModeContainer}>
            <View style={styles.darkModeLeft}>
              <Icon name="moon" size={24} color="#333" />
              <Text style={styles.darkModeText}>Dark Mood</Text>
            </View>
            <Switch
              trackColor={{ false: '#e0e0e0', true: '#5C5CFF' }}
              thumbColor={isDarkMode ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />
          </View>

          <ProfileMenuItem title="Truck Your Order" iconName="local-shipping" />
          <ProfileMenuItem title="Settings" iconName="settings" />
          <ProfileMenuItem title="Help Center" iconName="help" />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
          <Icon name="log-out" size={20} color="#5C5CFF" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfoContainer: {
    backgroundColor: '#FFFDE7',
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  editProfileButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#5C5CFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: 'white',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  darkModeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    fontSize: 16,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C5CFF',
    marginRight: 5,
  },
});

export default ProfileScreen;