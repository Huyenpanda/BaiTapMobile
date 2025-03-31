import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Components/AppContext';
import { CustomTextInput } from '../Components/CustomTextInput';
import { IconButton } from '../Components/IconButton';

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  // Password must be at least 8 characters long, 
  // contain at least one uppercase, one lowercase, and one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleSignIn = async () => {
    try {
      // Simulate getting user data from backend
      const userData = {
        name: 'John Doe', // This would typically come from backend
        email: email,
        token: 'sample-token'
      };
  
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      // Set logged in state
      setIsLoggedIn(true);
    } catch (error) {
      console.log('Error signing in:', error);
    }
    // Reset errors
    setErrors({
      email: '',
      password: ''
    });

    let isValid = true;
    const newErrors = { ...errors };

    // Validate Email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Validate Password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      await AsyncStorage.setItem('userToken', 'sample-token');
      setIsLoggedIn(true);
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Sign In</Text>
        
        <CustomTextInput
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        
        <CustomTextInput
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>Or sign in with</Text>
        
        <View style={styles.socialButtonsContainer}>
          <IconButton
            icon="logo-google"
            text="Google"
            onPress={() => {/* Implement Google Sign In */}}
          />
          
          <IconButton
            icon="logo-facebook"
            text="Facebook"
            backgroundColor="#3b5998"
            textColor="#FFFFFF"
            iconColor="#FFFFFF"
            onPress={() => {/* Implement Facebook Sign In */}}
          />
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
};

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSignUp = async () => {
    // Reset errors
    setErrors({
      email: '',
      password: '',
      confirmPassword: ''
    });

    let isValid = true;
    const newErrors = { ...errors };

    // Validate Email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Validate Password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, and number';
      isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      // Navigate to Sign In or perform sign up logic
      navigation.navigate('SignIn');
    } catch (error) {
      console.log('Error during sign up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        
        <CustomTextInput
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        
        <CustomTextInput
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        
        <CustomTextInput
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
        
        <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
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
};

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    // Reset password logic would go here
    // For now, just navigate back to sign in
    navigation.navigate('SignIn');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>
        
        <CustomTextInput
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity style={styles.signInButton} onPress={handleResetPassword}>
          <Text style={styles.signInButtonText}>Reset Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5,
    paddingLeft: 8,
  },
});