import React, { useState, useContext } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from './Components/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignInScreen({ navigation }) {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Here you would typically validate credentials against a backend
    // For this example, we'll simply check if fields are not empty
    if (email.trim() && password.trim()) {
      try {
        // Store authentication state
        await AsyncStorage.setItem('userToken', 'sample-token');
        // Update global auth state
        setIsLoggedIn(true);
      } catch (error) {
        console.log('Error signing in:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Sign In</Text>
        
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>Or sign in with</Text>
        
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={18} color="#5F6368" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.facebookButton}>
            <Ionicons name="logo-facebook" size={18} color="#FFFFFF" />
            <Text style={styles.facebookButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Not yet a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>
        
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInButtonText}>Reset Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#F9A826',
    textAlign: 'right',
    marginBottom: 24,
  },
  signInButton: {
    backgroundColor: '#F9A826',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  googleButton: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  facebookButton: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    backgroundColor: '#3b5998',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  socialButtonText: {
    marginLeft: 8,
    color: '#5F6368',
  },
  facebookButtonText: {
    marginLeft: 8,
    color: '#FFFFFF',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: '#888',
  },
  signUpText: {
    color: '#F9A826',
    fontWeight: 'bold',
  },
  backButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#888',
  },
});