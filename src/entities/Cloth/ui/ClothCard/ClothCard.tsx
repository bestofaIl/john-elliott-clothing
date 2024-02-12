import {
    View, StyleSheet, ImageBackground, Image,
} from "react-native";
import { Cloth } from "entities/Cloth";

type ClothCardProps = Pick<Cloth, "img">

const ClothCard = ({ img }: ClothCardProps) => (
    <View style={styles.container}>
        {/* <ImageBackground source={img} resizeMode="cover" style={{ flex: 1, width: "100%", height: "100%" }} /> */}
        <Image source={img} style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 148,
        height: 148,
        borderRadius: 28,
        padding: 5,
        overflow: "hidden",
        margin: 10,
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        resizeMode: "contain",
    },
});

export default ClothCard;
