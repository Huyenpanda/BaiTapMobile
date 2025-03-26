import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Flag from "react-native-flags";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const NumberScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name="arrow-left" size={20} />
            </TouchableOpacity>

            <Text style={styles.title}>Enter your mobile number</Text>
            <Text style={styles.label}>Mobile Number</Text>

            <View style={styles.inputContainer}>
                <Flag code="BD" size={32} />
                <Text style={{ marginHorizontal: 10 }}>+880</Text>
                <TextInput style={styles.input} keyboardType="numeric" />
            </View>

            <TouchableOpacity style={styles.nextButton}>
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
        marginTop: 20
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
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginTop: 10,
        paddingBottom: 5
    },
    input: {
        flex: 1,
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

export default NumberScreen;
