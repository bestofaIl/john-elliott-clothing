import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import { Colors, Fonts } from "shared/constants";

interface HiddenTextButtonProps {
    id: string;
    hiddenText: string;
    labelText?: string;
    labelReveal?: string;
    color?: string;
    textColor?: string;
    isReveal?: boolean;
    onReveal: (id: string) => void;
    onRevealAction: (text: string) => void;
}
const HiddenTextButton = ({
    id, labelText, labelReveal, hiddenText, textColor, color, isReveal, onReveal, onRevealAction,
}: HiddenTextButtonProps) => {
    // const color = isActive ? TabColor.ACTIVE : TabColor.INACTIVE;
    const handleReveal = () => {
        if (onReveal) {
            onReveal(id);
        }
    };

    const handleAction = () => {
        if (onRevealAction) {
            onRevealAction(hiddenText);
        }
    };

    return (
        <View>
            {isReveal
                ? (
                    <View style={styles.revealedContainer}>
                        <View style={{ position: "relative", flexDirection: "row", left: 20 }}>
                            <View style={styles.textHiddenContainer}>
                                <View style={{ paddingHorizontal: 5 }}>
                                    <Text style={styles.textHidden}>{hiddenText}</Text>
                                </View>
                            </View>

                            <TouchableWithoutFeedback onPress={handleAction}>
                                <View style={styles.revealedButton}>
                                    <Text style={styles.textLabel}>{labelReveal}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                )
                : (
                    <TouchableWithoutFeedback onPress={handleReveal}>
                        <View style={styles.revealButton}>
                            <Text style={styles.textLabel}>{labelText}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    revealedContainer: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    revealButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        paddingHorizontal: 45,
        paddingVertical: 8,
    },
    revealedButton: {
        position: "relative",
        left: -40,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 7,
    },
    textLabel: {
        fontFamily: Fonts.LEXEND_BOLD,
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center",
        color: Colors.WHITE,
    },
    textHiddenContainer: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.PRIMARY,
        borderRadius: 20,
        paddingLeft: 6,
        paddingRight: 40,
        paddingVertical: 7,
        minWidth: 200,
    },
    textHidden: {
        fontFamily: Fonts.LEXEND_REGULAR,
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center",
        color: Colors.BLACK,
    },
});

export default HiddenTextButton;
