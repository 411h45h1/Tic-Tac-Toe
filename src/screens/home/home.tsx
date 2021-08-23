import React, { ReactElement } from "react";
import { View, Text, Button } from "react-native";
import style from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorPrams } from "@config/navigator";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorPrams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <View style={style.container}>
            <Text>Home</Text>
            <Button
                title="Game"
                onPress={() => {
                    navigation.navigate("Game", { gameId: "123" });
                }}
            />
        </View>
    );
}
