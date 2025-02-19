import React from "react";
import { FlatList, SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const notifications = [
  { id: "1", title: "Thông báo 1", content: "Nội dung thông báo 1", datetime: "10:00 AM - 19/02/2025" },
  { id: "2", title: "Thông báo 2", content: "Nội dung thông báo 2", datetime: "11:30 AM - 19/02/2025" },
  { id: "3", title: "Thông báo 3", content: "Nội dung thông báo 3", datetime: "01:45 PM - 19/02/2025" },
];

const NotificationList = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://www.svgrepo.com/svg/327448/notifications-circle",
                }}
              />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.datetime}>{item.datetime}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
  datetime: {
    fontSize: 12,
    color: "gray",
  },
});

export default NotificationList;
