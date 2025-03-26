import React from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() =>{
        setTimeout(() => {
            navigation.replace("Onbording");
        }, 2000);
    }, []);
    return (
        <View style={{flex: 1, height: 69, width: "auto", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(83, 177, 117, 1)", flexDirection: "row"}}>
            <FontAwesome5 name="carrot" size={68} color="white"/>
            <View style={{marginLeft: 10, alignItems: "center"}}>
                <Text style={{fontSize: 48, color: "white", fontWeight: '600', textAlign: 'center'}}>nectar</Text>
                <Text style={{fontSize: 14, color: "white", textAlign: "center", letterSpacing: 2}}>online groceriet</Text>
            </View>
        </View>
    );
};
export default Splash;