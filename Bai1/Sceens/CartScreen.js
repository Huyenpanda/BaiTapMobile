import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CartItem from "../Components/CartItem";

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Icon name="trash-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Burger Image */}
        <View style={styles.mainImageContainer}>
          <Image
            source={require('../assets/burgerImage.png')}
            style={styles.mainImage}
          />
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>
        </View>

        {/* Burger Selection */}
        <View style={styles.burgerSelectionContainer}>
          <View style={styles.burgerRow}>
            <Image
              source={require('../assets/BurgerImageRow.png')}
              style={styles.burgerThumbnail}
            />
            <Image
              source={require('../assets/BurgerImageRow.png')}
              style={styles.burgerThumbnail}
            />
            <Image
              source={require('../assets/BurgerImageRow.png')}
              style={styles.burgerThumbnail}
            />
          </View>
        </View>

        {/* Burger Info */}
        <View style={styles.burgerInfoContainer}>
          <View style={styles.burgerTitleRow}>
            <View>
              <Text style={styles.burgerTitle}>BURGER</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
              </View>
              <View style={styles.anonymousTag}>
                <Text style={styles.anonymousText}>Anonymous</Text>
              </View>
            </View>
            <View style={styles.priceQuantityContainer}>
              <Text style={styles.burgerPrice}>$28</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityBtn}>
                  <Icon name="add" size={20} color="#5C5CFF" />
                </TouchableOpacity>
                <Text style={styles.quantity}>02</Text>
                <TouchableOpacity style={styles.quantityBtn}>
                  <Icon name="remove" size={20} color="#5C5CFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Address */}
          <View style={styles.addressContainer}>
            <View style={styles.addressLeft}>
              <Icon name="location-outline" size={20} color="#5C5CFF" />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="pencil" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Payment Method */}
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodLeft}>
              <Image
                source={require('../assets/CardImage.png')}
                style={styles.cardImage}
              />
              <Text style={styles.paymentMethodText}>Payment Method</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* Checkout Summary */}
          <View style={styles.checkoutSummaryContainer}>
            <Text style={styles.summaryTitle}>Checkout Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal (2)</Text>
              <Text style={styles.summaryValue}>$56</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$6.20</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelTotal}>Payable Total</Text>
              <Text style={styles.summaryValueTotal}>$62.2</Text>
            </View>
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    padding: 5,
  },
  mainImageContainer: {
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: 200,
  },
  discountTag: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#5C5CFF",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  discountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  burgerSelectionContainer: {
   
    position: 'absolute', // Cho phép đè lên thành phần khác
    top: "22%", // Đặt khoảng cách từ phía trên (tuỳ chỉnh theo ý bạn)
    left: '16%', // Căn chỉnh theo chiều ngang (giống marginHorizontal)
    right: '16%', // Để căn giữa chiều ngang
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ffff',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 70,
    zIndex: 5, // Đảm bảo searchContainer nằm trên header
    

  },
  burgerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  burgerThumbnail: {
    width: 75,
    height: 70,
    borderRadius: 8,
    // margin:5,
    marginHorizontal: 10,
    
    

  },
  burgerInfoContainer: {
    padding: 16,
    backgroundColor: "white",
    marginTop: 10,
  },
  burgerTitleRow: {
    flexDirection: "row",
    justifyContent: "center", // Đảm bảo các thumbnail đều nằm ở giữa
  alignItems: "center", // Căn giữa theo chiều dọc

    justifyContent: "space-between",
    marginBottom: 15,
  },
  burgerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
  },
  anonymousTag: {
    backgroundColor: "#4CAF50",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  anonymousText: {
    color: "white",
    fontSize: 10,
  },
  priceQuantityContainer: {
    alignItems: "flex-end",
  },
  burgerPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5C5CFF",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityBtn: {
    width: 24,
    height: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8F5FE",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  addressLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressTextContainer: {
    marginLeft: 8,
  },
  addressLabel: {
    fontSize: 12,
    color: "#666",
  },
  addressText: {
    fontSize: 14,
    fontWeight: "500",
  },
  editButton: {
    backgroundColor: "#5C5CFF",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentMethodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  paymentMethodLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 32,
    height: 20,
    marginRight: 8,
  },
  paymentMethodText: {
    fontSize: 14,
    fontWeight: "500",
  },
  changeButton: {
    borderWidth: 1,
    borderColor: "#5C5CFF",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  changeButtonText: {
    color: "#5C5CFF",
    fontSize: 12,
  },
  checkoutSummaryContainer: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  summaryLabelTotal: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryValueTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5C5CFF",
  },
  confirmButton: {
    backgroundColor: "#5C5CFF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;
