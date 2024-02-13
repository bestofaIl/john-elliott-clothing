import { StateSchema } from "app/prodivers/StoreProvider";

export const getCloth = (state: StateSchema) => state.cloth.entities;
export const getClothLoadingStatus = (state: StateSchema) => state.cloth.isLoading;
