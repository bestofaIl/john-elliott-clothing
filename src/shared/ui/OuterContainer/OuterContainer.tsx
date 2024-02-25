import { ReactNode } from "react";
import {
    DimensionValue, ImageBackground, StyleSheet, View,
} from "react-native";

interface OuterContainerProps {
    children: ReactNode,
    image?: number,
    backgroundColor?: string,
    padding?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    paddingTop?: DimensionValue,
    paddingBottom?: DimensionValue,
}

const OuterContainer = ({
    children, image, backgroundColor, padding, paddingHorizontal, paddingTop, paddingBottom,
}: OuterContainerProps) => {
    if (image) {
        return (
            <ImageBackground
                source={image}
                style={
                    [
                        styles.container,
                        {
                            padding, backgroundColor, paddingHorizontal, paddingTop, paddingBottom,
                        },
                    ]
                }
            >
                {children}
            </ImageBackground>
        );
    }

    return (
        <View style={[styles.container, {
            padding, backgroundColor, paddingHorizontal, paddingTop, paddingBottom,
        }]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default OuterContainer;
