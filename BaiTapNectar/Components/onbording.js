import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Button, View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onbording = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground

            source={require("../assets/background-onbording.jpg")}
            style={styles.background}
            resizeMode="cover" // contain, stretch
        >
            <View style={styles.content}>
                <View style={{position: "absolute", bottom: 290, alignSelf: "center"}}>
                    <FontAwesome5 name="carrot" size={48} color="white" />
                </View>
                <View style={{ position: "absolute", bottom: 200, alignItems: "center" }}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.title}>to our store</Text>
                    <Text style={{color: "white", fontSize: 16}}>Get your groceries in as fast as one hour</Text>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: "rgba(83, 177, 117, 1)",
                        position: "absolute",
                        bottom: 50,
                        padding: 10,
                        borderRadius: 10,
                        width: 353,
                        height: 67,
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                    onPress={() => navigation.navigate("signin")} // navigate to screen SignIn

                >
                    <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Get started</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "auto"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white", // Đảm bảo chữ hiển thị trên nền ảnh
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10, // Tạo khoảng cách với icon
    },
});

export default Onbording;