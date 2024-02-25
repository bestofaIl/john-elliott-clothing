import {
    View, StyleSheet, Image, Text,
} from "react-native";
import { Cloth } from "entities/Cloth";
import { isEven } from "shared/lib/helpers/isEven/isEven";

type ClothCardImage = Pick<Cloth, "img">
interface ClothCardProps extends ClothCardImage {
    backgroundColor?: string;
    margin?: number;
    index: number;
}

const ClothCard = ({
    img, backgroundColor, margin, index,
}: ClothCardProps) => (
    <View style={
        [
            styles.container,
            { backgroundColor: backgroundColor || "white", marginVertical: margin || 0 },
            (isEven(index) ? { marginRight: margin } : { marginLeft: margin, marginRight: 0 }),
        ]
    }
    >
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
