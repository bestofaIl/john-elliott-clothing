import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FashionLookPage } from "pages/FashionLookPage";
import { FavoritesPage } from "pages/FavoritesPage";
import { TipsPage } from "pages/TipsPage";
import { CouponesPage } from "pages/CouponesPage";
import Favorites from "shared/assets/icons/Favorites.svg";
import FashionLook from "shared/assets/icons/FashionLook.svg";
import Tips from "shared/assets/icons/Tips.svg";
import Coupones from "shared/assets/icons/Coupones.svg";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarContainer,
                tabBarActiveTintColor: "#F36303",
                tabBarInactiveTintColor: "#555555",
                tabBarShowLabel: false,
            }}
            >
                <Tab.Screen
                    name="Fashion Look"
                    component={FashionLookPage}
                    options={{
                        tabBarIcon: ({ color }) => <FashionLook color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesPage}
                    options={{
                        tabBarIcon: ({ color }) => <Favorites color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Tips"
                    component={TipsPage}
                    options={{
                        tabBarIcon: ({ color }) => <Tips color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Coupones"
                    component={CouponesPage}
                    options={{
                        tabBarIcon: ({ color }) => <Coupones color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    tabBarContainer: {
        backgroundColor: "#333333",
        height: 146,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0,
        borderTopWidth: 0,
    },
});
