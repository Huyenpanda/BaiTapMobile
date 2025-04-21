import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }
    const userData = { username, email, password };
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    navigation.navigate('SelectLocation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥕</Text>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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

      <Text style={styles.policyText}>
        By continuing you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sing Up</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Singup</Text>
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
  policyText: { fontSize: 12, color: 'gray', marginBottom: 20 },
  link: { color: 'green' },
  button: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: 'white', fontSize: 16 },
  footer: { textAlign: 'center', color: 'gray' },
});

export default SignUpScreen;
