import { ReactNode, useEffect } from "react";
import { loadClothList } from "entities/Cloth/model/services/loadClothList/loadClothList";
import { useDispatch, useSelector } from "react-redux";
import { getClothLoadingStatus } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface AppLoaderProps {
    children?: ReactNode;
}
export const AppLoader = (props: AppLoaderProps) => {
    const dispatch = useDispatch<any>();
    const isLoading = useSelector(getClothLoadingStatus);
    const [fontsLoaded] = useFonts({
        Lekton: require("shared/assets/fonts/Lekton-Bold.ttf"),
    });
    const {
        children,
    } = props;

    useEffect(() => {
        dispatch(loadClothList());
    }, [dispatch]);

    if (isLoading || !fontsLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }

    return children;
};
