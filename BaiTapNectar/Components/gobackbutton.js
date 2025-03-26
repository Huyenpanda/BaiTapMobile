import React from "react";
import { Button, StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const GoBackButton = ({ color, backgroundColor, name, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                padding: 10,
                borderRadius: 50, 
                alignItems: "center",
                justifyContent: "center",
                width: size + 20, // Điều chỉnh kích thước nút theo icon
                height: size + 20,
            }}
        >
             <FontAwesome5 name={name} size={size} color={color} />
        </TouchableOpacity>
    );
};

export default GoBackButton;