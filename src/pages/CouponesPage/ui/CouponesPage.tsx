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
import { Colors, Fonts } from "shared/constants";

const CouponesPage = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const coupones = useSelector(getCouponeList);

    const [isRevealCoupon, setIsRevealCoupon] = useState<Record<string, boolean>>({});
    const handleReveal = (id: string) => {
        setIsRevealCoupon((prevState) => ({ ...prevState, [id]: true }));
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("shared/assets/images/favoritesBackGround.png")}
                style={[styles.imageBackground, { paddingTop: insets.top }]}
            >
                <View style={{
                    flex: 1, width: "100%",
                }}
                >
                    <Text style={styles.pageText}>{route.name}</Text>
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
                    {/* <TipCard {...currentTipList[0]} onPress={onDelete} /> */}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: "6%",
        paddingBottom: "5%",
    },
    pageText: {
        fontFamily: Fonts.LEKTON_BOLD,
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: Colors.PRIMARY,
        marginBottom: 15,
        // paddingLeft: 10,
    },
});

export default CouponesPage;
