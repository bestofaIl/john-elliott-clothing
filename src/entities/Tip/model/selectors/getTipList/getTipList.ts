import { StateSchema } from "app/prodivers/StoreProvider";

export const getTipList = (state: StateSchema) => state.tip.entities;

export const getTipLoadingStatus = (state: StateSchema) => state.tip.isLoading;
