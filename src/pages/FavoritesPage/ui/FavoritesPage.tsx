import { StyleSheet, Text, View } from "react-native";

const FavoritesPage = () => (
    <View style={styles.container}>
        <Text style={{
            fontFamily: "Lekton",
        }}
        >
            Favorites
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FavoritesPage;
