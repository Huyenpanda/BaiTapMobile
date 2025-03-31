import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './Sceens/HomeScreen';
import CartScreen from './Sceens/CartScreen';
import InboxScreen from './Sceens/InboxScreen';
import ProfileScreen from './Sceens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'HOME') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'ORDER') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'INBOX') {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              } else if (route.name === 'PROFILE') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#5C5CFF',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="ORDER" component={CartScreen} />
          <Tab.Screen name="INBOX" component={InboxScreen} />
          <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;