import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const IconButton = ({ 
  icon, 
  text, 
  onPress, 
  backgroundColor = '#fff', 
  textColor = '#5F6368',
  iconColor = '#5F6368'
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <Ionicons name={icon} size={18} color={iconColor} />
        <Text style={[styles.buttonText, { color: textColor }]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
  },
});