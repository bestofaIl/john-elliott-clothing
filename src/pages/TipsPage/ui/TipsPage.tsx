import { StyleSheet, Text, View } from "react-native";

const TipsPage = () => (
    <View style={styles.container}>
        <Text>
            Tips
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

export default TipsPage;
