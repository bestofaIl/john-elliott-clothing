import { ReactNode, useEffect } from "react";
import { loadClothList } from "entities/Cloth/model/services/loadClothList/loadClothList";
import { useDispatch, useSelector } from "react-redux";
import { getClothLoadingStatus } from "entities/Cloth/model/selectors/getCloth/getCloth";
import { Text } from "react-native";

interface AppLoaderProps {
    children?: ReactNode;
}
export const AppLoader = (props: AppLoaderProps) => {
    const dispatch = useDispatch<any>();
    const isLoading = useSelector(getClothLoadingStatus);
    const {
        children,
    } = props;

    useEffect(() => {
        dispatch(loadClothList());
    }, [dispatch]);

    if (isLoading) {
        return (
            <Text>Loading...</Text>
        );
    }

    return children;
};
