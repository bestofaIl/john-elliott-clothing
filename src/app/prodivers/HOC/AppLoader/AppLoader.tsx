import { ReactNode, useEffect } from "react";
import { loadClothList } from "entities/Cloth/model/services/loadClothList/loadClothList";
import { useDispatch, useSelector } from "react-redux";
import { getClothLoadingStatus } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { getTipLoadingStatus } from "entities/Tip/model/selectors/getTipList/getTipList";
import { loadTipList } from "entities/Tip/model/services/loadTipList/loadTipList";

interface AppLoaderProps {
    children?: ReactNode;
}
export const AppLoader = (props: AppLoaderProps) => {
    const dispatch = useDispatch<any>();
    const isClothLoading = useSelector(getClothLoadingStatus);
    const isTipLoading = useSelector(getTipLoadingStatus);
    const [fontsLoaded] = useFonts({
        Lekton: require("shared/assets/fonts/Lekton-Bold.ttf"),
        "IBM Plex Sans": require("shared/assets/fonts/IBMPlexSans-Regular.ttf"),
    });
    const {
        children,
    } = props;

    useEffect(() => {
        dispatch(loadClothList());
        dispatch(loadTipList());
    }, [dispatch]);

    if (isClothLoading || !fontsLoaded || isTipLoading) {
        return (
            <Text>Loading...</Text>
        );
    }

    return children;
};
