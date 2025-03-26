import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const VerificationScreen = ({ navigation }) => {
    const [code, setCode] = useState("");

    const handleVerify = () => {
        if (code.length === 4) {
            alert("Code Verified!");
            // Điều hướng sang màn hình tiếp theo (nếu cần)
            // navigation.navigate("NextScreen");
        } else {
            alert("Please enter a 4-digit code.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Nút Back */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name="arrow-left" size={20} />
            </TouchableOpacity>

            {/* Tiêu đề */}
            <Text style={styles.title}>Enter your 4-digit code</Text>
            <Text style={styles.label}>Code</Text>

            {/* Ô nhập mã OTP */}
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={4}
                value={code}
                onChangeText={setCode}
                placeholder="- - - -"
                textAlign="center"
                secureTextEntry
            />

            {/* Gửi lại mã */}
            <TouchableOpacity onPress={() => alert("Resend Code")} style={styles.resendContainer}>
                <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>

            {/* Nút xác nhận */}
            <TouchableOpacity style={styles.nextButton} onPress={handleVerify}>
                <FontAwesome5 name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        marginTop: 22
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20
    },
    label: {
        marginTop: 20,
        fontSize: 16,
        color: "gray"
    },
    input: {
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: "gray",
        padding: 10,
        marginTop: 10,
        letterSpacing: 15
    },
    resendContainer: {
        marginTop: 20
    },
    resendText: {
        color: "green",
        fontSize: 16
    },
    nextButton: {
        backgroundColor: "green",
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: 30
    }
});

export default VerificationScreen;
