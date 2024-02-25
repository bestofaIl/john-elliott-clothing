import { DimensionValue } from "react-native";

export const Colors = {
    // UI Neutrals
    NEUTRAL_700: "#333333",
    NEUTRAL_500: "#555555",
    NEUTRAL_300: "#D9D9D9",

    // UI Primary
    PRIMARY: "#F36303",

    // UI Base
    WHITE: "#FFFFFF",
    BLACK: "#000000",
};
export const Fonts = {
    LEXEND_BOLD: "Lexend-Bold", // Font File Name Must Match To Use Custom Font
    LEXEND_REGULAR: "Lexend-Regular", // Font File Name Must Match To Use Custom Font
    LEKTON_BOLD: "Lekton-Bold",
    IBM_PLEX_SANS_REGULAR: "IBM Plex Sans",
};

enum sizes {
    S = "paddingSmall",
    M = "paddingMedium"
}
export const Sizes: Record<sizes, DimensionValue> = {
    [sizes.S]: "5%",
    [sizes.M]: "10%",
};

const proportionalCoefficient = 44 / 187;

export const Constants = {
    PROPORTIONAL_COEFFICIENT: proportionalCoefficient,
    TAB_CONTAINER_WIDTH_FRACTION: 90,
    TAB_WIDTH_FRACTION: 54.4,
    TAB_OFFSET_FRACTION: 9.35,
};

export const Images = {};

export const Icons = {};
