import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

import { Splash } from "@components";
import Navigator from "@config/navigator";

export default function App(): ReactElement {
    return (
        <Splash>
            <Navigator />
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
