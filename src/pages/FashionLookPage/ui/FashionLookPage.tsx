import { StyleSheet, Text, View } from "react-native";
import FrontTab from "shared/assets/icons/FrontTab.svg";
import { useFonts } from "expo-font";

const FashionLookPage = () => {
    const [fontsLoaded] = useFonts({
        Lekton: require("../../../shared/assets/fonts/Lekton-Bold.ttf"),
    });
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: "Lekton" }}>Fashion Look</Text>
                <View style={styles.temp}>
                    <View style={styles.blockOne}>
                        <FrontTab color="#333333" />
                    </View>
                    <View style={styles.blockTwo}>
                        <FrontTab color="#555555" />
                    </View>
                </View>
            </View>
        );
    }
    return <Text>loading...</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
    },
    temp: {
        flexDirection: "row",
        position: "relative",
        width: 342,
        height: 44,
        borderColor: "black",
        borderWidth: 0,
    },
    blockOne: {
        position: "absolute",
        left: 0,
        zIndex: 2,
    },
    blockTwo: {
        position: "absolute",
        top: 0,
        right: 0,
    },
});

export default FashionLookPage;
