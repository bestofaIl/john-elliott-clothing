import {
    StyleSheet, useWindowDimensions, View,
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
import { Colors, Constants, Sizes } from "shared/constants";
import { useRoute } from "@react-navigation/native";
import HeaderPage from "shared/ui/HeaderPage/HeaderPage";
import OuterContainer from "shared/ui/OuterContainer/OuterContainer";

const FashionLookPage = () => {
    const route = useRoute();
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const tabContainerWidth = (width * Constants.TAB_CONTAINER_WIDTH_FRACTION) / 100;
    const tabWidth = Math.floor((tabContainerWidth * Constants.TAB_WIDTH_FRACTION) / 100);
    const tabContainerHeight = Constants.PROPORTIONAL_COEFFICIENT * tabWidth;
    const offset = ((tabContainerWidth * Constants.TAB_OFFSET_FRACTION) / 100);

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
        <OuterContainer backgroundColor={Colors.WHITE} paddingHorizontal={Sizes.paddingSmall} paddingTop={insets.top}>
            <View style={styles.fashionContainer}>
                <View style={{ alignSelf: "flex-start" }}>
                    <HeaderPage>{route.name}</HeaderPage>
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
        </OuterContainer>
    );
};

const styles = StyleSheet.create({
    fashionContainer: {
        flex: 1,
        position: "relative",
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
    },
});

export default FashionLookPage;
