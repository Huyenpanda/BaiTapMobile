import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity, ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CategoryItem from "../Components/CategoryItem";
import FoodItem from "../Components/FoodItem";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/Avatar.png")}
              style={styles.profileImage}
            />
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Your Location</Text>
              <View style={styles.locationRow}>
                <Image
                  source={require("../assets/LocationIcon.png")}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={styles.locationText}>Savar, Dhaka</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Image
              source={require("../assets/NotiIcon2.png")}
              style={{ width: 46, height: 46 }}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your food"
            placeholderTextColor="#888"
          />
          <Icon
            name="restaurant"
            size={20}
            color="#888"
            style={styles.filterIcon}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollView}
          >
            <CategoryItem
              title="PIZZA"
              imageSource={require("../assets/PizzaIcon.png")}
              color="#29D697"
              selected={true}
            />
            <CategoryItem
              title="BURGER"
              imageSource={require("../assets/BurgerIcon.png")}
              color="#F5F5F5"
              selected={false}
            />
            <CategoryItem
              title="DRINK"
              imageSource={require("../assets/DrinkIcon.png")}
              color="#F5F5F5"
              selected={false}
            />
            <CategoryItem
              title="RICE"
              imageSource={require("../assets/BowlOfRiceIcon.png")}
              color="#F5F5F5"
              selected={false}
            />
          </ScrollView>
        </View>

        {/* Featured Food */}

<View style={styles.featuredContainer}>
  <ImageBackground
    source={{uri: 'https://s3-alpha-sig.figma.com/img/e2fc/379b/8bc1ce4e56845fb6c9ad32c843fa3aa7?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eSeGTzzyRDkslDuBhphyU6JoCff-5Y3OnjOzRbQZrfodZmoPtxKCSIEqV-bvvaCujh3gLmM~5UVJlwi1cUIhKvBV6sfsOlsRqnPVmsRb8Ojc39-3F5aO36hqg6ZijWELqkmb1EaLiIsRuPUuJWdx1tqDEETRgq0qDAjWrAifUAm8Dx6ELhPW0cXotUDMsOflo9YOp5pVuBC9as~jnMx9T5~AcpdduXoVyz1x1CGodBRtqnXwaIuiT3o3FgZI9Kdix7Vg2HgGl~zDjaYPAhKooE7TV0Ld7CchQv-NvLFO62ETge-81zK6VLOw7nm1~qsw~9wRQXgb-BK-dU1HTxvP-A__'}} // Hình nền từ thư mục assets
    style={styles.burgerBanner}
    imageStyle={{ borderRadius: 15 , width:"55%", marginLeft:"55%",marginTop:"5%"}} // Đảm bảo các góc của hình ảnh được bo tròn
  >
    <View style={styles.burgerTextContainer}>
      <Text style={styles.burgerTitle}>BURGER</Text>
      <Text style={styles.burgerSubtitle}>Today's Hot offer</Text>
      <View style={styles.ratingContainer}>
        <Image
          source={require('../assets/Avatar.png')}
          style={styles.userAvatar}
        />
        <Image
          source={require('../assets/Avatar.png')}
          style={[styles.userAvatar, { marginLeft: -5 }]}
        />
        <Image
          source={require('../assets/Avatar.png')}
          style={[styles.userAvatar, { marginLeft: -5 }]}
        />
        <View style={styles.ratingRow}>
          <Icon name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
        </View>
      </View>
    </View>
    <View style={styles.discountTag}>
      <Text style={styles.discountText}>
        <Text style={styles.discountPercent}>10%</Text>
        {"\n"}
        <Text style={styles.discountOff}>OFF</Text>
      </Text>
    </View>
  </ImageBackground>
</View>

        {/* Popular Items */}
        <View style={styles.popularContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.foodRow}>
            <TouchableOpacity style={styles.foodItemLarge}>
              <Image
                source={require('../assets/burgerImage.png')}
                style={styles.foodImageLarge}
              />
              <Text style={styles.foodTitleLarge}>BURGER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.foodItemLarge}>
              <Image
                source={require('../assets/PizzaImage.png')}
                style={styles.foodImageLarge}
              />
              <Text style={styles.foodTitleLarge}>PIZZA</Text>
            </TouchableOpacity>
          </View>
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
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#FFFDE7",
    borderBottomEndRadius: "20%",
    borderBottomStartRadius: "20%",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: "10%",
  },
  locationContainer: {
    marginLeft: "50%",
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  locationLabel: {
    fontSize: 12,
    color: "#888",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "4%",
  },
  searchContainer: {
    position: "absolute", // Cho phép đè lên thành phần khác
    top: "18%", // Đặt khoảng cách từ phía trên (tuỳ chỉnh theo ý bạn)
    left: "6%", // Căn chỉnh theo chiều ngang (giống marginHorizontal)
    right: "6%", // Để căn giữa chiều ngang
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C5CFF",
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 60,
    zIndex: 10, // Đảm bảo searchContainer nằm trên header
  },
  searchIcon: {
    marginRight: 10,
    color: "white",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  filterIcon: {
    marginLeft: 10,
    color: "white",
  },
  categoriesContainer: {
    marginVertical: 10,
    marginTop: "25%",
  },
  categoriesScrollView: {
    paddingHorizontal: 16,
  },
  featuredContainer: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  burgerBanner: {
    backgroundColor: "#2E2E2E",
    borderRadius: 15,
    overflow: "hidden",
    height: 150,
    position: "relative",
  },
  burgerTextContainer: {
    padding: 16,
  },
  burgerTitle: {
    color: "yellow",
    fontSize: 24,
    fontWeight: "bold",
  },
  burgerSubtitle: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  userAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "white",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
  discountTag: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#5C5CFF",
    width: 60, // Đặt chiều rộng
    height: 60, // Đặt chiều cao
    borderRadius: 30, // Đặt borderRadius bằng một nửa chiều rộng/chiều cao để tạo hình tròn
    justifyContent: "center", // Căn giữa nội dung theo chiều dọc
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
  },
  discountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center", // Căn giữa văn bản bên trong
  },
  discountPercent: {
    fontSize: 16, // Làm nổi bật "10%"
    fontWeight: "bold",
  },
  discountOff: {
    fontSize: 12, // Kích thước nhỏ hơn cho "OFF"
    fontWeight: "bold",
  },
  popularContainer: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    fontSize: 14,
    color: "#5C5CFF",
  },
  foodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodItemLarge: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  foodImageLarge: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  foodTitleLarge: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
