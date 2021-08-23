import React from "react";
import { StyleSheet, View } from "react-native";
import {
    useFonts,
    ComicNeue_400Regular,
    ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import AppLoading from "expo-app-loading";
import { Text } from "@components";

export default function App() {
    const [fontLoaded] = useFonts({
        ComicNeue_400Regular,
        ComicNeue_700Bold,
    });

    if (!fontLoaded) return <AppLoading />;
    return (
        <View style={styles.container}>
            <Text bold onPress={() => alert(true)} style={{ fontSize: 40 }}>
                Hello World
            </Text>
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
});
