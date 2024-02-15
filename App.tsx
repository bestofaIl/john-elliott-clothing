import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreProvider } from "app/prodivers/StoreProvider";
import { AppLoader } from "app/prodivers/HOC/AppLoader/AppLoader";
import { AppRouter } from "app/prodivers/router";

export default function App() {
    return (
        <SafeAreaProvider>
            <StoreProvider>
                <AppLoader>
                    <StatusBar hidden />
                    <AppRouter />
                </AppLoader>
            </StoreProvider>
        </SafeAreaProvider>
    );
}
