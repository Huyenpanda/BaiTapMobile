import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, Text, TouchableOpacity } from "react-native";

const ButtonLogin = ({name, backgroundColor, title}) => {
    return (
        <TouchableOpacity
            style={{
                borderRadius: 20,
                backgroundColor: backgroundColor,
                width: 300,
                height: 67,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15
            }}
        >
            <FontAwesome5 name={name} size={25} color="white" style={{left: 30}}/>
            <Text style={{left: 65}}>Continue with {title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonLogin;