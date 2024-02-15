import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import { ClothCard } from "entities/Cloth";
import { Tip } from "entities/Tip/model/types/tip";
import Close from "shared/assets/icons/Сlose.svg";
import { Colors, Fonts } from "shared/constants";

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
                    <Close color={Colors.PRIMARY} />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.imageContainer}>
                <ClothCard img={img} backgroundColor={Colors.NEUTRAL_300} />
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
        backgroundColor: Colors.WHITE,
        borderRadius: 28,
        padding: 25,
        position: "relative",
    },
    imageContainer: {
        marginBottom: 28,
    },
    tipHeader: {
        fontFamily: Fonts.LEKTON_BOLD,
        fontSize: 20,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: Colors.BLACK,
        marginBottom: 28,
    },
    textNode: {
        fontFamily: Fonts.IBM_PLEX_SANS_REGULAR,
        fontSize: 12,
        lineHeight: 17,
        color: Colors.BLACK,
    },
    closeButton: {
        position: "absolute",
        right: -20,
        top: -20,
        zIndex: 20,
    },
});

export default TipCard;
