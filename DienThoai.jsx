import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

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
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={[styles.button, phoneNumber ? styles.buttonActive : null]} onPress={() => {}}>
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
    alignItems: 'left',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    //textShadowColor: 'rgba(0, 0, 0, 0.75)', // Thêm shadow dưới chữ "Đăng nhập"
    //textShadowOffset: { width: 0, height: 2 },
    //textShadowRadius: 3,
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
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: 'green', // Màu nền của nút "Tiếp tục" khi điền số điện thoại
  },
  buttonText: {
    color: '#fff', // Màu chữ button trắng
    fontSize: 16,
  },
});