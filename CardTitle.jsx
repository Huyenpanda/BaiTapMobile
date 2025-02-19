import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CardTitle = ({ text, background, color, setBg }) => {
  return (
    <TouchableOpacity onPress={() => setBg(background)}>
      <View
        style={{
          backgroundColor: background,
          padding: 10,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: color, textAlign: "center" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTitle;