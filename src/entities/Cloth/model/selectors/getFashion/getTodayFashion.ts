import { createSelector } from "@reduxjs/toolkit";
import { getClothListByCategory } from "entities/Cloth/model/selectors/getClothListByCategory/getClothListByCategory";
import { ClothCategory } from "entities/Cloth/model/types/cloth";

export const getTodayFashion = createSelector([
    getClothListByCategory(ClothCategory.tops),
    getClothListByCategory(ClothCategory.bottoms),
    getClothListByCategory(ClothCategory.footwear),
], (tops, bottoms, footwear) => [
    ...tops.filter((topCloth) => topCloth.isTodayFashion),
    ...bottoms.filter((bottomCloth) => bottomCloth.isTodayFashion),
    ...footwear.filter((footwearCloth) => footwearCloth.isTodayFashion),
]);
