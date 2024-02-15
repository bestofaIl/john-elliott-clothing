import { ReactNode, useEffect } from "react";
import { loadClothList } from "entities/Cloth/model/services/loadClothList/loadClothList";
import { useSelector } from "react-redux";
import { getClothLoadingStatus } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { getTipLoadingStatus } from "entities/Tip/model/selectors/getTipList/getTipList";
import { loadTipList } from "entities/Tip/model/services/loadTipList/loadTipList";
import { getCouponeLoadingStatus } from "entities/Coupone/model/selectors/getCouponeList/getCouponeList";
import { loadCouponeList } from "entities/Coupone/model/services/loadCouponeList/loadCouponeList";
import { Fonts } from "shared/constants";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface AppLoaderProps {
    children?: ReactNode;
}
export const AppLoader = (props: AppLoaderProps) => {
    const dispatch = useAppDispatch();
    const isClothLoading = useSelector(getClothLoadingStatus);
    const isTipLoading = useSelector(getTipLoadingStatus);
    const isCouponeLoading = useSelector(getCouponeLoadingStatus);
    const [fontsLoaded] = useFonts({
        [Fonts.LEXEND_BOLD]: require("shared/assets/fonts/Lexend-Bold.ttf"),
        [Fonts.LEKTON_BOLD]: require("shared/assets/fonts/Lekton-Bold.ttf"),
        [Fonts.LEXEND_REGULAR]: require("shared/assets/fonts/Lexend-Regular.ttf"),
        [Fonts.IBM_PLEX_SANS_REGULAR]: require("shared/assets/fonts/IBMPlexSans-Regular.ttf"),
    });

    const {
        children,
    } = props;

    useEffect(() => {
        dispatch(loadClothList());
        dispatch(loadTipList());
        dispatch(loadCouponeList());
    }, [dispatch]);

    const dataLoaded = !isClothLoading && !isTipLoading && !isCouponeLoading && fontsLoaded;

    if (!dataLoaded) {
        return (
            <Text>Loading...</Text>
        );
    }
    return children;
};
