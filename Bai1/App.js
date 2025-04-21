// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetailScreen from './screens/ProductDetailScreen'
// Import screens
import LoginScreen from './screens/signInScreen';
import SignUpScreen from './screens/signupScreen';
import SelectLocationScreen from './screens/locationScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen'
import Beverages from './screens/BeveragesScreen'
// Placeholder screens cho tab
const CartScreen = () => <></>;
const FavouriteScreen = () => <></>;
const AccountScreen = () => <></>;

// Tạo Stack và Bottom Tab
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// BottomTab chứa các tab chính (Home nằm trong này)
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';

        switch (route.name) {
          case 'Shop':
            iconName = focused ? 'storefront' : 'storefront-outline';
            break;
          case 'Explore':
            iconName = focused ? 'search' : 'search-outline';
            break;
          case 'Cart':
            iconName = focused ? 'cart' : 'cart-outline';
            break;
          case 'Favourite':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
          case 'Account':
            iconName = focused ? 'person' : 'person-outline';
            break;
        }

        return <Ionicons name={iconName} size={24} color={color} />;
      },
      tabBarActiveTintColor: '#53B175',
      tabBarInactiveTintColor: '#000',
    })}
  >
    <Tab.Screen name="Shop" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Favourite" component={FavouriteScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverage" component={Beverages} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
