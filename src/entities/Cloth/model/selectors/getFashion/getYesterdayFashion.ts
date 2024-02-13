import { createSelector } from "@reduxjs/toolkit";
import { getClothListByCategory } from "entities/Cloth/model/selectors/getClothListByCategory/getClothListByCategory";
import { ClothCategory } from "entities/Cloth/model/types/cloth";

export const getYesterdayFashion = createSelector([
    getClothListByCategory(ClothCategory.tops),
    getClothListByCategory(ClothCategory.bottoms),
    getClothListByCategory(ClothCategory.footwear),
], (tops, bottoms, footwear) => [
    ...tops.filter((topCloth) => topCloth.isYesterdayFashion),
    ...bottoms.filter((bottomCloth) => bottomCloth.isYesterdayFashion),
    ...footwear.filter((footwearCloth) => footwearCloth.isYesterdayFashion),
]);
