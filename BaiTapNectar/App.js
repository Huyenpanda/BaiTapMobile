import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Components/splash';
import Onbording from './Components/onbording';
import SignIn from './Components/signin';
import OTP from './Components/otp';
import NumberScreen from './Components/number';
import VerificationScreen from './Components/verification';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Onbording" component={Onbording}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="otp" component={OTP}/>
        <Stack.Screen name="number" component={NumberScreen}/>
        <Stack.Screen name="verification" component={VerificationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


