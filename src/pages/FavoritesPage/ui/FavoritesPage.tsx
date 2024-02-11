import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getCloth } from "entities/Cloth/model/selectors/getCloth/getCloth";

const FavoritesPage = () => {
    const clothList = useSelector(getCloth);
    console.log(clothList);
    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: "Lekton",
            }}
            >
                Favorites
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FavoritesPage;
