import { StyleSheet, View } from "react-native";
import Tab, { tabNames } from "shared/ui/Tab/Tab";

interface TabsWidgetProps {
    width: number,
    height: number,
    tabWidth: number,
    offset: number,
    tabsState: Record<tabNames, boolean>,
    handlePress: (name: tabNames) => void,
    label?: [string, string],
    textColor?: string,
}

const TabsWidget = ({
    width, height, tabWidth, offset, label, tabsState, handlePress, textColor,
}: TabsWidgetProps) => (
    <View style={[styles.tabsContainer, { width, height }]}>
        <Tab
            width={tabWidth}
            label={label ? label[0] : ""}
            name={tabNames.left}
            isActive={tabsState[tabNames.left]}
            toggleTab={handlePress}
            labelColor={textColor}
        />
        <Tab
            width={tabWidth}
            label={label ? label[1] : ""}
            offset={offset}
            name={tabNames.right}
            isActive={tabsState[tabNames.right]}
            toggleTab={handlePress}
            labelColor={textColor}
        />
    </View>
);

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: "row",
    },
});

export default TabsWidget;
