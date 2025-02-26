import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState(''); // State để lưu text nhập vào TextInput
  const [errorMessage, setErrorMessage] = useState(''); // State để lưu thông báo lỗi

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  const handleTextChange = (text) => {
    setPhoneNumber(text);
    validatePhoneNumber(text); // Kiểm tra số điện thoại khi nhập
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Nhập số điện thoại của bạn'
        keyboardType='phone-pad' 
        value={phoneNumber}
        onChangeText={handleTextChange} // Gọi hàm handleTextChange khi nhập văn bản
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null} 
      <TouchableOpacity 
        style={[styles.button, phoneNumber ? styles.buttonActive : null]} 
        onPress={() => validatePhoneNumber(phoneNumber)} // Kiểm tra số điện thoại khi click button
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
    backgroundColor: 'lightgray', // Màu nền của nút "Tiếp tục" mờ hơn
    padding: 10,
  // paddingLeft: 100;
  paddingHorizontal: 135,
    borderRadius: 5,
    alignItems: 'center',
    // width: 100
  },
  buttonActive: {
    backgroundColor: 'green', // Màu nền của nút "Tiếp tục" khi điền số điện thoại
  },
  buttonText: {
    color: '#fff', // Màu chữ button trắng
    fontSize: 16,
  },
  errorMessage: {
    color: 'red', // Màu chữ cảnh báo
    marginBottom: 16,
  },

});
