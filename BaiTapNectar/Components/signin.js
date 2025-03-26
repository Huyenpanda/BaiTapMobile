import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Flag from 'react-native-flags';
import { TextInput } from "react-native";
import ButtonLogin from "./buttonlogin";

const SignIn = ({ navigation }) => {
    const [phone, setPhone] = useState("");
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ImageBackground
                source={require("../assets/background-signin.jpg")}
                resizeMode="cover"
                style={{ width: "auto", height: 374 }}
            >
            </ImageBackground>
            <View style={styles.body}>
                <Text style={{ fontWeight: 600, fontSize: 26, lineHeight: 29, marginLeft: 25 }}>Get your groceries {"\n"}with nectar</Text>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    borderBottomColor: "light-gray",
                    borderBottomWidth: 1,
                    position: "absolute",
                    top: 450,
                    marginLeft: 25,
                    width: 320,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,

                }}
            >
                <Flag code="BD" size={32} />
                <Text style={{ left: 5 }}>+880</Text>
                <TextInput
                    style={{
                        flex: 1, // Cho phép TextInput mở rộng hết phần còn lại
                        fontSize: 16,
                        marginLeft: 10 // Tạo khoảng cách với số điện thoại
                    }}
                    keyboardType="numeric"
                />
            </View>
            <Text style={{ position: "absolute", top: 540, width: "100%", textAlign: "center" }}>Or connect with social media</Text>
            <View style={{ alignItems: "center",justifyContent: "center", width: "100%", position: "absolute", top: 550 }}>
                <ButtonLogin name="google" backgroundColor="#4285F4" title="Google" />
                <ButtonLogin name="facebook" backgroundColor="#1877F2" title="Facebook" />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white"
    }
});
export default SignIn;