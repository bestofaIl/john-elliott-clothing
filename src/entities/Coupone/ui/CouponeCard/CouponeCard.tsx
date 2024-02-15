import {
    View, StyleSheet, Text, TouchableWithoutFeedback,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Coupone } from "entities/Coupone";
import HiddenTextButton from "shared/ui/HiddenTextButton/HiddenTextButton";
import { Colors, Fonts } from "shared/constants";

interface CouponeCardProps extends Coupone{
    isReveal?: boolean;
    onReveal: (id: string) => void;
}

const CouponeCard = ({
    id, name, amount, codeValue, isReveal, onReveal,
}: CouponeCardProps) => {
    const copyToClipboard = async (text: string) => {
        await Clipboard.setStringAsync(text);
    };
    return (
        <View style={[styles.container]}>
            <View style={{ marginBottom: 11 }}>
                <Text style={styles.text}>{`${amount}% off`}</Text>
                <Text style={styles.text}>{name}</Text>
            </View>

            <HiddenTextButton
                id={id}
                hiddenText={codeValue}
                labelText="open"
                labelReveal="copy"
                isReveal={isReveal || false}
                onReveal={onReveal}
                onRevealAction={copyToClipboard}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
        marginBottom: 35,
        // width: 148,
        // height: 148,
        // borderRadius: 28,
        // padding: 5,
        // overflow: "hidden",
    },
    text: {
        fontFamily: Fonts.LEXEND_BOLD,
        fontWeight: "bold",
        fontSize: 14,
        textTransform: "uppercase",
        textAlign: "center",
        color: Colors.BLACK,
    },
});

export default CouponeCard;
