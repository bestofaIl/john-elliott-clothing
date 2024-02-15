import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import FrontTab from "shared/assets/icons/FrontTab.svg";
import { Fonts } from "shared/constants";

export enum TabColor {
    ACTIVE = "#333333",
    INACTIVE = "#555555"
}

export enum tabNames {
    left = "FIRST",
    right = "SECOND"
}
interface TabProps {
    name: tabNames,
    width: number,
    isActive: boolean,
    offset?: number,
    label?: string,
    labelColor?: string,
    toggleTab?: (name: tabNames) => void,
}
const Tab = ({
    name, width, isActive, offset, label, labelColor, toggleTab,
}: TabProps) => {
    const color = isActive ? TabColor.ACTIVE : TabColor.INACTIVE;
    const handlePress = () => {
        if (toggleTab) {
            toggleTab(name);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={{
                position: "relative", zIndex: isActive ? 20 : undefined, right: offset || null, left: offset ? null : 0,
            }}
            >
                <FrontTab color={color} width="100%" height="100%" />
                <View style={[styles.textContainer, { width }]}>
                    <Text style={{ color: labelColor, zIndex: 20, fontFamily: Fonts.LEKTON_BOLD }}>{label}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        position: "relative",
        bottom: "60%",
        zIndex: 21,
        alignItems: "center",
    },
});

export default Tab;
