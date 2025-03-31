import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const messages = [
  {
    id: '1',
    sender: 'Restaurant Support',
    message: 'Your order #12345 has been confirmed!',
    time: '10:30 AM',
    unread: true,
    avatar: 'https://via.placeholder.com/50?text=RS',
  },
  {
    id: '2',
    sender: 'Delivery Partner',
    message: 'I am on my way with your order.',
    time: 'Yesterday',
    unread: false,
    avatar: 'https://via.placeholder.com/50?text=DP',
  },
  {
    id: '3',
    sender: 'Pizza Palace',
    message: 'Thank you for your order! How was your experience?',
    time: 'Mar 28',
    unread: false,
    avatar: 'https://via.placeholder.com/50?text=PP',
  },
  {
    id: '4',
    sender: 'Burger King',
    message: 'We have a new promotion! 20% off on all burgers this weekend.',
    time: 'Mar 27',
    unread: false,
    avatar: 'https://via.placeholder.com/50?text=BK',
  },
];

const MessageItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.sender}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text
          style={[
            styles.messageText,
            item.unread && styles.unreadMessage,
          ]}
          numberOfLines={1}
        >
          {item.message}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
};

const InboxScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 5,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    fontWeight: 'bold',
    color: '#333',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5C5CFF',
    alignSelf: 'center',
  },
});

export default InboxScreen;