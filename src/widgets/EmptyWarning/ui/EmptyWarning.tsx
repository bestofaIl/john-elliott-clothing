import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import { Colors, Fonts } from "shared/constants";

interface EmptyWarningProps {
    title?: string;
    resetLabel?: string;
    reset?: () => void;
}
const EmptyWarning = ({ title, resetLabel, reset }: EmptyWarningProps) => {
    const handlePress = () => {
        if (reset) {
            reset();
        }
    };
    return (
        <View style={styles.container}>
            {reset ? (
                <>
                    <Text style={styles.titleText}>{title || "Out of data!"}</Text>
                    <TouchableWithoutFeedback onPress={handlePress}>
                        <View style={styles.resetContainer}>
                            <Text style={styles.resetText}>{resetLabel || "Reset"}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </>
            ) : (
                <Text style={styles.defaultText}>{title || "Out of data!"}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontFamily: Fonts.IBM_PLEX_SANS_REGULAR,
        fontSize: 20,
        color: Colors.BLACK,
    },
    resetText: {
        fontFamily: Fonts.LEKTON_BOLD,
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: Colors.PRIMARY,
    },
    resetContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: Colors.NEUTRAL_500,
        borderRadius: 10,
    },
    defaultText: {
        fontSize: 20,
        color: Colors.BLACK,
    },
});

export default EmptyWarning;
