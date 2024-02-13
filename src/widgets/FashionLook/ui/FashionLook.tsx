import { Image, StyleSheet, View } from "react-native";
import { Cloth } from "entities/Cloth/model/types/cloth";

interface FashionLookProps {
    items: Array<Cloth>
}

const FashionLook = ({ items }: FashionLookProps) => (
    <View style={styles.container}>
        {items.map((cloth) => (
            <Image
                source={cloth.img}
                key={cloth.id}
                style={{
                    width: 148,
                    resizeMode: "contain",
                }}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        overflow: "hidden",
    },
});

export default FashionLook;
