import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigation = ({ navigation, state }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('HOME')}
      >
        <Icon
          name={state.index === 0 ? 'home' : 'home-outline'}
          size={24}
          color={state.index === 0 ? '#5C5CFF' : 'gray'}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 0 ? '#5C5CFF' : 'gray' },
          ]}
        >
          HOME
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('ORDER')}
      >
        <Icon
          name={state.index === 1 ? 'cart' : 'cart-outline'}
          size={24}
          color={state.index === 1 ? '#5C5CFF' : 'gray'}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 1 ? '#5C5CFF' : 'gray' },
          ]}
        >
          ORDER
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('INBOX')}
      >
        <Icon
          name={state.index === 2 ? 'chatbubble' : 'chatbubble-outline'}
          size={24}
          color={state.index === 2 ? '#5C5CFF' : 'gray'}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 2 ? '#5C5CFF' : 'gray' },
          ]}
        >
          INBOX
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('PROFILE')}
      >
        <Icon
          name={state.index === 3 ? 'person' : 'person-outline'}
          size={24}
          color={state.index === 3 ? '#5C5CFF' : 'gray'}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 3 ? '#5C5CFF' : 'gray' },
          ]}
        >
          PROFILE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default BottomNavigation;