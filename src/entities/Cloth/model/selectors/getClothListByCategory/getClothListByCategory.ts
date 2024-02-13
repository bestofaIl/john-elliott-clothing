import { ClothCategory } from "entities/Cloth/model/types/cloth";
import { createSelector } from "@reduxjs/toolkit";
import { getCloth } from "entities/Cloth/model/selectors/getClothList/getCloth";

export const getClothListByCategory = (category: ClothCategory) => createSelector(getCloth, (cloths) => cloths
    ?.filter((item) => item.category === category));
