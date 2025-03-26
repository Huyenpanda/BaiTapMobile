import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Enhanced App Context to include user information
export const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (status: boolean) => {},
  userProfile: {
    email: '',
    name: '',
  },
  setUserProfile: (profile: { email: string, name: string }) => {},
});

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    email: '',
    name: '',
  });

  return (
    <AppContext.Provider value={{ 
      isLoggedIn, 
      setIsLoggedIn, 
      userProfile, 
      setUserProfile 
    }}>
      {children}
    </AppContext.Provider>
  );
};