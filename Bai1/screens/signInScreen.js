import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedData = await AsyncStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (email === userData.email && password === userData.password) {
        Alert.alert('Login Successful');
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid credentials');
      }
    } else {
      Alert.alert('No user found. Please sign up first.');
    }
  };
    

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥕</Text>
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.forgotText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Singup</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  logo: { fontSize: 40, textAlign: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: 'gray', textAlign: 'center', marginBottom: 30 },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  forgotText: {
    textAlign: 'right',
    color: 'gray',
    marginBottom: 20,
    fontSize: 13,
  },
  button: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: 'white', fontSize: 16 },
  footer: { textAlign: 'center', color: 'gray' },
  link: { color: 'green' },
});

export default LoginScreen;
