import React, { ReactElement, ReactNode } from "react";
import { View, Text } from "react-native";
import {
    useFonts,
    ComicNeue_300Light,
    ComicNeue_300Light_Italic,
    ComicNeue_400Regular,
    ComicNeue_400Regular_Italic,
    ComicNeue_700Bold,
    ComicNeue_700Bold_Italic,
} from "@expo-google-fonts/comic-neue";
import AppLoading from "expo-app-loading";

type SplashProps = {
    children: ReactNode;
};
export default function Splash({ children }: SplashProps): ReactElement {
    const [fontLoaded] = useFonts({
        ComicNeue_300Light,
        ComicNeue_300Light_Italic,
        ComicNeue_400Regular,
        ComicNeue_400Regular_Italic,
        ComicNeue_700Bold,
        ComicNeue_700Bold_Italic,
    });

    return fontLoaded ? <>{children}</> : <AppLoading />;
}
