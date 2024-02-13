import {
    View, StyleSheet, Image,
} from "react-native";
import { Cloth } from "entities/Cloth";

type ClothCardImage = Pick<Cloth, "img">
interface ClothCardProps extends ClothCardImage {
    backgroundColor?: string;
    margin?: number;
}

const ClothCard = ({ img, backgroundColor, margin }: ClothCardProps) => (
    <View style={[styles.container, { backgroundColor: backgroundColor || "white", margin: margin || 0 }]}>
        <Image source={img} style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 148,
        height: 148,
        borderRadius: 28,
        padding: 5,
        overflow: "hidden",
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        resizeMode: "contain",
    },
});

export default ClothCard;
