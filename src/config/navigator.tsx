import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Game, Home } from "@screens";

export type StackNavigatorPrams = {
    Home: undefined;
    Game: {
        gameId: string;
    };
};

const Stack = createStackNavigator<StackNavigatorPrams>();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
