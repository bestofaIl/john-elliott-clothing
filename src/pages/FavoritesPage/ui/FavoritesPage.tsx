import {
    FlatList, ImageBackground, StyleSheet, Text, View,
} from "react-native";
import { useSelector } from "react-redux";
import { getCloth } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { ClothCard } from "entities/Cloth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Colors, Fonts } from "shared/constants";

const FavoritesPage = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const clothList = useSelector(getCloth);
    return (
        <View style={[styles.container]}>
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
                        data={clothList}
                        renderItem={({ item }) => <ClothCard img={item.img} margin={10} />}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        paddingHorizontal: "5%",
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

export default FavoritesPage;
