import {
    StyleSheet, Text, useWindowDimensions, View,
} from "react-native";
import FrontTab from "shared/assets/icons/FrontTab.svg";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const FashionLookPage = () => {
    const { width } = useWindowDimensions();
    const [fontsLoaded] = useFonts({
        Lekton: require("../../../shared/assets/fonts/Lekton-Bold.ttf"),
    });
    // const [isActive, setIsActive] = useState();
    const insets = useSafeAreaInsets();
    const proportionalNumber = 44 / 187;
    const tabContainerWidth = (width * 90) / 100;
    const tabWidth = Math.floor((tabContainerWidth * 54.4) / 100);
    const tabContainerHeight = proportionalNumber * tabWidth;
    const offset = ((tabContainerWidth * 9.35) / 100);
    if (fontsLoaded) {
        return (
            <View style={[styles.container, { paddingTop: insets.top }]}>

                <Text style={{ fontFamily: "Lekton" }}>Fashion Look</Text>
                {/* <View style={[styles.tabsContainer, { width: tabContainerWidth }]}> */}
                {/*    <View style={{ position: "relative", left: 0 }}> */}
                {/*        <View style={styles.blockOne}> */}
                {/*            <FrontTab color="#333333" width={tabWidth} height="44" viewBox={`0 0 ${tabContainerWidth} 44`} /> */}
                {/*        </View> */}
                {/*        <View style={{ */}
                {/*            position: "relative", bottom: "75%", zIndex: 21, alignItems: "center", width: tabWidth, */}
                {/*        }} */}
                {/*        > */}
                {/*            <Text style={{ color: "black", zIndex: 20 }}>Today</Text> */}
                {/*        </View> */}
                {/*    </View> */}

                {/*    <View style={{ */}
                {/*        position: "relative", right: offset, */}
                {/*    }} */}
                {/*    > */}
                {/*        <View style={styles.blockTwo}> */}
                {/*            <FrontTab color="#555555" width={tabWidth} height="44" viewBox={`0 0 ${tabContainerWidth} 44`} /> */}
                {/*        </View> */}
                {/*        <View style={{ */}
                {/*            position: "relative", bottom: "75%", alignItems: "center", width: tabWidth, */}
                {/*        }} */}
                {/*        > */}
                {/*            <Text style={{ color: "black", zIndex: 20 }}>Yesterday</Text> */}
                {/*        </View> */}
                {/*    </View> */}
                {/* </View> */}
                <View style={[styles.tabsContainer, { width: tabContainerWidth, height: tabContainerHeight }]}>
                    <View style={{ position: "relative", left: 0, zIndex: 5 }}>
                        <FrontTab color="#333333" width="100%" height="100%" />
                        <View style={{
                            position: "relative", bottom: "75%", zIndex: 21, alignItems: "center", width: tabWidth,
                        }}
                        >
                            <Text style={{ color: "black", zIndex: 20 }}>Today</Text>
                        </View>
                    </View>

                    <View style={{ position: "relative", right: offset }}>
                        <FrontTab color="#555555" width="100%" height="100%" />
                        <View style={{
                            position: "relative", bottom: "75%", zIndex: 21, alignItems: "center", width: tabWidth,
                        }}
                        >
                            <Text style={{ color: "black", zIndex: 20 }}>Yesterday</Text>
                        </View>
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
    tabsContainer: {
        flexDirection: "row",
        // position: "relative",
        borderColor: "black",
        borderWidth: 0,
    },
    blockOne: {
        backgroundColor: "green",
        // position: "absolute",
        // left: 0,
        // zIndex: 2,
        // borderWidth: 1,
        // borderColor: "red",
    },
    blockTwo: {
        // position: "absolute",
        // right: 0,
    },
});

export default FashionLookPage;
