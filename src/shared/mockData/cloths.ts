import { Cloth } from "entities/Cloth";
import { ClothCategory } from "entities/Cloth/model/types/cloth";

export const mockDataJs: Array<Cloth> = [
    {
        id: "123",
        name: "wool cool",
        img: require("../assets/images/wool.png"),
        category: ClothCategory.tops,
        isYesterdayFashion: true,
    },
    {
        id: "124",
        name: "cool jeans",
        img: require("../assets/images/jeans.png"),
        category: ClothCategory.bottoms,
        isYesterdayFashion: true,
    },
    {
        id: "125",
        name: "cool shoes",
        img: require("../assets/images/shoes.jpg"),
        category: ClothCategory.footwear,
        isYesterdayFashion: true,
    },
    {
        id: "126",
        name: "cool shirt cell",
        img: require("../assets/images/cellShirt.png"),
        category: ClothCategory.tops,
        isTodayFashion: true,
    },
    {
        id: "127",
        name: "cool doted trousers",
        img: require("../assets/images/dotedTrousers.png"),
        category: ClothCategory.bottoms,
        isTodayFashion: true,
    },
    {
        id: "128",
        name: "cool black boots",
        img: require("../assets/images/blackBoots.png"),
        category: ClothCategory.footwear,
        isTodayFashion: true,
    },
];
