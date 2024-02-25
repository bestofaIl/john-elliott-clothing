import {
    FlatList, ImageBackground, StyleSheet, View,
} from "react-native";
import { useSelector } from "react-redux";
import { getCloth } from "entities/Cloth/model/selectors/getClothList/getCloth";
import { ClothCard } from "entities/Cloth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import HeaderPage from "shared/ui/HeaderPage/HeaderPage";
import { Colors, Sizes } from "shared/constants";
import OuterContainer from "shared/ui/OuterContainer/OuterContainer";

const FavoritesPage = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const clothList = useSelector(getCloth);
    return (
        <OuterContainer
            image={require("shared/assets/images/favoritesBackGround.png")}
            backgroundColor={Colors.BLACK}
            paddingHorizontal={Sizes.paddingSmall}
            paddingTop={insets.top}
        >
            <View style={{
                alignSelf: "flex-start",
            }}
            >
                <HeaderPage>{route.name}</HeaderPage>
            </View>
            <FlatList
                data={clothList}
                renderItem={({ item, index }) => <ClothCard img={item.img} margin={10} index={index} />}
                numColumns={2}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </OuterContainer>
    );
};
export default FavoritesPage;
