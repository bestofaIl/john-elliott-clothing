import {
    Image,
    StyleSheet, Text, useWindowDimensions, View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabNames } from "shared/ui/Tab/Tab";
import { TabsWidget } from "widgets/TabsWidget";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getYesterdayFashion } from "entities/Cloth/model/selectors/getFashion/getYesterdayFashion";
import { FashionLook } from "widgets/FashionLook";
import { getTodayFashion } from "entities/Cloth/model/selectors/getFashion/getTodayFashion";
import AddFavorites from "shared/assets/icons/AddFavorites.svg";
import { Colors, Fonts } from "shared/constants";

const FashionLookPage = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const proportionalNumber = 44 / 187;
    const tabContainerWidth = (width * 90) / 100;
    const tabWidth = Math.floor((tabContainerWidth * 54.4) / 100);
    const tabContainerHeight = proportionalNumber * tabWidth;
    const offset = ((tabContainerWidth * 9.35) / 100);

    const yesterdayFashionList = useSelector(getYesterdayFashion);
    const todayFashionList = useSelector(getTodayFashion);

    const [tabsState, setTabsState] = useState<Record<tabNames, boolean>>({
        [tabNames.left]: true,
        [tabNames.right]: false,
    });
    const handleTabPress = (name: tabNames) => {
        setTabsState({
            [tabNames.right]: false,
            [tabNames.left]: false,
            [name]: true,
        });
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>

            <View style={styles.fashionContainer}>
                {/* <View style={styles.pageTextContainer}> */}
                {/*    <Text style={styles.pageText}>Fashion Look</Text> */}
                {/* </View> */}
                <View style={{ alignSelf: "flex-start" }}>
                    <Text style={styles.pageText}>Fashion Look</Text>
                </View>

                <View style={{
                    position: "absolute", alignSelf: "flex-end", top: 15,
                }}
                >
                    <AddFavorites color={Colors.PRIMARY} />
                </View>
                <FashionLook items={tabsState.FIRST ? yesterdayFashionList : todayFashionList} />
            </View>

            <TabsWidget
                width={tabContainerWidth}
                height={tabContainerHeight}
                tabWidth={tabWidth}
                offset={offset}
                label={["Yesterday", "Today"]}
                tabsState={tabsState}
                handlePress={handleTabPress}
                textColor={Colors.WHITE}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "6%",
    },
    fashionContainer: {
        flex: 1,
        position: "relative",
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
    },

    pageText: {
        fontFamily: Fonts.LEKTON_BOLD,
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: Colors.PRIMARY,
        marginBottom: 15,
    },
});

export default FashionLookPage;
