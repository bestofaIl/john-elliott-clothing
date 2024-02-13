import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import { ClothCard } from "entities/Cloth";
import { Tip } from "entities/Tip/model/types/tip";
import Close from "shared/assets/icons/Сlose.svg";

interface TipCardProps extends Tip {
    onPress?: (id: string) => void;
}

const TipCard = ({
    img, header, textSections, id, onPress,
}: TipCardProps) => {
    const handlePress = () => {
        if (onPress) {
            onPress(id);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.closeButton}>
                    <Close />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.imageContainer}>
                <ClothCard img={img} backgroundColor="#D9D9D9" />
            </View>
            <View>
                <Text style={styles.tipHeader}>{header}</Text>
            </View>
            <View>
                {textSections.map((section, key) => <Text style={styles.textNode} key={`${id + key}`}>{section}</Text>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: "100%",
        backgroundColor: "#fff",
        borderRadius: 28,
        // borderWidth: 1,
        // borderColor: "red",
        padding: 25,
        position: "relative",
    },
    imageContainer: {
        marginBottom: 28,
    },
    tipHeader: {
        fontFamily: "Lekton",
        fontWeight: "700",
        fontSize: 20,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#000",
        marginBottom: 28,
    },
    textNode: {
        fontFamily: "IBM Plex Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 17,
        color: "#000",
    },
    closeButton: {
        position: "absolute",
        right: -20,
        top: -20,
        zIndex: 20,
    },
});

export default TipCard;
