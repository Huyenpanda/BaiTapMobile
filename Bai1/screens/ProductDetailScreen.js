import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
     
       <Image
          source={require('../assets/AppleImage2.png')}
          style={styles.productImage}
        />
    
      <Text style={styles.productName}>Natural Red Apple</Text>
      <Text style={styles.productWeight}>1kg, Price</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.price}>${(4.99 * quantity).toFixed(2)}</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Product Detail</Text>
      <Text style={styles.sectionContent}>
        Apples are nutritious. They are rich in fiber and antioxidants and are great for a healthy diet.
      </Text>
      <Text style={styles.sectionTitle}>Nutrition</Text>
      <Text style={styles.sectionContent}>Calories: 95 • Carbs: 25g • Fiber: 4g • Vitamin C: 14%</Text>
      <Text style={styles.sectionTitle}>Review</Text>
      <Text style={styles.sectionContent}>★★★★★</Text>
      <TouchableOpacity style={styles.addToBasket}>
        <Text style={styles.addToBasketText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  productImage: { width: '100%', height: 200, resizeMode: 'contain' },
  productName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  productWeight: { fontSize: 14, color: '#888', marginTop: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  quantityButton: { fontSize: 20, paddingHorizontal: 15 },
  quantityText: { fontSize: 16, marginHorizontal: 10 },
  price: { fontSize: 18, fontWeight: 'bold', marginLeft: 'auto' },
  addToBasket: { backgroundColor: '#53B175', padding: 15, borderRadius: 10, alignItems: 'center' },
  addToBasketText: { color: '#fff', fontSize: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  sectionContent: { fontSize: 14, color: '#888', marginTop: 5, marginBottom:30 },
});

export default ProductDetailScreen;
