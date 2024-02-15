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
import { StyleSheet } from "react-native";
import { Colors } from "shared/constants";

// enum AppRoutes {
//     FASHION_LOOK = "Fashion Look",
//     FAVORITES = "Favorites",
//     TIPS = "Tips",
//     COUPONES = "Coupones"
// }

// const routeConfig: Record<
//     AppRoutes,
//     RouteConfig<
//         ParamListBase,
//         string,
//         TabNavigationState<ParamListBase>,
//         BottomTabNavigationOptions,
//         BottomTabNavigationEventMap>
// > = {
//     [AppRoutes.FASHION_LOOK]: {
//         component: FashionLookPage,
//         name: AppRoutes.FASHION_LOOK,
//     },
//     [AppRoutes.FAVORITES]: {
//         component: FavoritesPage,
//         name: AppRoutes.FAVORITES,
//     },
//     [AppRoutes.TIPS]: {
//         component: TipsPage,
//         name: AppRoutes.TIPS,
//     },
//     [AppRoutes.COUPONES]: {
//         component: CouponesPage,
//         name: AppRoutes.COUPONES,
//     },
// };

const Tab = createBottomTabNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarContainer,
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.NEUTRAL_500,
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
};

const styles = StyleSheet.create({
    tabBarContainer: {
        paddingHorizontal: "5%",
        backgroundColor: Colors.NEUTRAL_700,
        height: 146,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 0,
    },
});

export default AppRouter;
