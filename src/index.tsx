import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Game, Home } from "@screens";
import {
    useFonts,
    ComicNeue_400Regular,
    ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import AppLoading from "expo-app-loading";

export default function App() {
    const [fontLoaded] = useFonts({
        ComicNeue_400Regular,
        ComicNeue_700Bold,
    });

    if (!fontLoaded) return <AppLoading />;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hellow World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "ComicNeue_400Regular",
        fontSize: 20,
    },
});
