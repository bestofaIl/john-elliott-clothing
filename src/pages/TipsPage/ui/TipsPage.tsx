import {
    StyleSheet, View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useSelector } from "react-redux";
import { getTipList } from "entities/Tip/model/selectors/getTipList/getTipList";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { EmptyWarning } from "widgets/EmptyWarning";
import { Colors, Sizes } from "shared/constants";
import { TipCard } from "entities/Tip";
import HeaderPage from "shared/ui/HeaderPage/HeaderPage";
import OuterContainer from "shared/ui/OuterContainer/OuterContainer";

const TipsPage = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const tips = useSelector(getTipList);

    const [currentTipList, setCurrentTipList] = useState(tips);

    const onDelete = (id: string) => {
        setCurrentTipList((prevState) => prevState.filter((tip) => tip.id !== id));
    };

    const onReset = () => {
        setCurrentTipList(tips);
    };

    if (!currentTipList.length) {
        return <EmptyWarning reset={onReset} />;
    }

    return (
        <OuterContainer
            image={require("shared/assets/images/favoritesBackGround.png")}
            backgroundColor={Colors.BLACK}
            paddingTop={insets.top}
            paddingBottom={Sizes.paddingSmall}
        >
            <View style={{ paddingLeft: Sizes.paddingSmall, alignSelf: "flex-start" }}>
                <HeaderPage>{route.name}</HeaderPage>
            </View>

            <View style={styles.container}>
                <TipCard {...currentTipList[0]} onPress={onDelete} />
            </View>
        </OuterContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Sizes.paddingMedium,
    },
});

export default TipsPage;
