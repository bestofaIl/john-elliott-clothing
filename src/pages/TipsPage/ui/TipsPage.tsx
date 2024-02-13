import {
    ImageBackground, StyleSheet, Text, View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TipCard from "entities/Tip/ui/TipCard/TipCard";
import { Tip } from "entities/Tip/model/types/tip";
import { useSelector } from "react-redux";
import { getTipList } from "entities/Tip/model/selectors/getTipList/getTipList";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { EmptyWarning } from "widgets/EmptyWarning";

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
                    <TipCard {...currentTipList[0]} onPress={onDelete} />
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
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "black",
        paddingHorizontal: "6%",
        paddingBottom: "5%",
    },
    pageText: {
        fontFamily: "Lekton",
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: "#F36303",
        marginBottom: 15,
        // paddingLeft: 10,
    },
});

export default TipsPage;
