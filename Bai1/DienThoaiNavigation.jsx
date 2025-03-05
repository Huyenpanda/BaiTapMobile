import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AppState } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SignInScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState(''); // State để lưu số điện thoại
  const [isValid, setIsValid] = useState(''); // State để lưu thông báo lỗi

  useEffect(() => {
    Alert.alert(
      'Welcome',
      'Chào mừng đến với khóa học lập trình React Native tại CodeFresher'
    );
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      console.log('App State Changed:', nextAppState);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(phone);
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber} // Cập nhật số điện thoại khi nhập
      />
      {isValid ? <Text style={styles.isValid}>{isValid}</Text> : null}
      <TouchableOpacity
        style={[styles.button, phoneNumber ? styles.buttonActive : null]}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Chào mừng bạn đến với ứng dụng của chúng tôi!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'Đăng nhập' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Trang chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonActive: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  isValid: {
    color: 'red',
    marginBottom: 16,
  },
});
