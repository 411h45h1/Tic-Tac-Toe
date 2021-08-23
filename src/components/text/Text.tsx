import React, { ReactElement, ReactNode } from "react";
import {
    StyleSheet,
    Text as NativeText,
    TextProps as NativeTextProps,
} from "react-native";

type TextProps = {
    children: ReactNode;
    bold: boolean;
} & NativeTextProps;

const defaultProps = {
    bold: false,
};

export default function Text({
    children,
    style,
    bold,
    ...props
}: TextProps): ReactElement {
    let desiredFont;
    if (bold) {
        desiredFont = "ComicNeue_700Bold";
    } else {
        desiredFont = "ComicNeue_400Regular";
    }

    return (
        <NativeText
            {...props}
            style={[
                style,
                {
                    fontFamily: desiredFont,
                },
            ]}
        >
            {children}
        </NativeText>
    );
}

Text.defaultProps = defaultProps;
