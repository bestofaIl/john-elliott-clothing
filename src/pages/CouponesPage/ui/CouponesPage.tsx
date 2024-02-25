import {
    FlatList,
    ImageBackground, StyleSheet, Text, View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getCouponeList } from "entities/Coupone/model/selectors/getCouponeList/getCouponeList";
import { CouponeCard } from "entities/Coupone";
import { useState } from "react";
import { Colors, Sizes } from "shared/constants";
import HeaderPage from "shared/ui/HeaderPage/HeaderPage";
import OuterContainer from "shared/ui/OuterContainer/OuterContainer";

const CouponesPage = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const coupones = useSelector(getCouponeList);

    const [isRevealCoupon, setIsRevealCoupon] = useState<Record<string, boolean>>({});
    const handleReveal = (id: string) => {
        setIsRevealCoupon((prevState) => ({ ...prevState, [id]: true }));
    };
    return (
        <OuterContainer
            image={require("shared/assets/images/favoritesBackGround.png")}
            backgroundColor={Colors.WHITE}
            paddingBottom={Sizes.paddingSmall}
            paddingTop={insets.top}
        >
            <View style={{ paddingLeft: Sizes.paddingSmall, alignSelf: "flex-start" }}>
                <HeaderPage>{route.name}</HeaderPage>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    style={{
                        backgroundColor: "white", borderRadius: 28, paddingVertical: 48, paddingHorizontal: 17,
                    }}
                    data={coupones}
                    renderItem={({ item }) => (
                        <CouponeCard
                            {...item}
                            isReveal={isRevealCoupon[item.id]}
                            onReveal={handleReveal}
                        />
                    )}
                />
            </View>
        </OuterContainer>
    );
};
export default CouponesPage;
