import {
    FlatList, ImageBackground, StyleSheet, Text, View,
} from "react-native";
import { useSelector } from "react-redux";
import { getCloth } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { ClothCard } from "entities/Cloth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

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
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.pageText}>{route.name}</Text>
                    <FlatList
                        data={clothList}
                        renderItem={({ item }) => <ClothCard img={item.img} />}
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
    },
    pageText: {
        fontFamily: "Lekton",
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: "#F36303",
        marginBottom: 15,
        paddingLeft: 10,
    },
});

export default FavoritesPage;
