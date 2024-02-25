import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "shared/constants";

interface HeaderPageProps {
    children: ReactNode
}
const HeaderPage = ({ children }: HeaderPageProps) => {
    return (
        <Text style={styles.headerText}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontFamily: Fonts.LEKTON_BOLD,
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "capitalize",
        color: Colors.PRIMARY,
        marginBottom: 15,
    },
});

export default HeaderPage;
