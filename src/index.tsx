import React from "react";
import { StyleSheet, View } from "react-native";

import { Splash, Text } from "@components";

export default function App() {
    return (
        <Splash>
            <View style={styles.container}>
                <Text bold onPress={() => alert(true)} style={{ fontSize: 40 }}>
                    Hello World
                </Text>
            </View>
        </Splash>
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
