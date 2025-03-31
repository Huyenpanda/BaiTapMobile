import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CategoryItem = ({ title, imageSource, color, selected }) => {
    return (
      <TouchableOpacity style={[styles.container, selected && styles.selected]}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <Image
            source={imageSource}
            style={styles.iconImage}
          />
        </View>
        <Text style={[styles.title, selected && styles.titleSelected]}>{title}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  selected: {
    backgroundColor: '#29D697',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000', // Màu mặc định (đen)
  },
  titleSelected: {
    color: 'white', // Màu chữ khi được chọn
    fontWeight: "600"
  },
});

export default CategoryItem;