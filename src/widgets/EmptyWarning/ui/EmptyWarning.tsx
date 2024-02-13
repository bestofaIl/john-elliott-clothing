import {
    StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";

interface EmptyWarningProps {
    title?: string;
    resetLabel?: string;
    reset: () => void;
}
const EmptyWarning = ({ title, resetLabel, reset }: EmptyWarningProps) => {
    const handlePress = () => {
        if (reset) {
            reset();
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title || "Out of data!"}</Text>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.resetContainer}>
                    <Text style={styles.resetText}>{resetLabel || "Reset"}</Text>
                </View>
            </TouchableWithoutFeedback>
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
        fontFamily: "IBM Plex Sans",
        fontWeight: "400",
        fontSize: 20,
        color: "#000",
    },
    resetText: {
        fontFamily: "Lekton",
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: "#F36303",
    },
    resetContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "#555555",
        borderRadius: 10,
    },
});

export default EmptyWarning;
