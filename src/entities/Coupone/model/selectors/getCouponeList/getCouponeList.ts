import { StateSchema } from "app/prodivers/StoreProvider";

export const getCouponeList = (state: StateSchema) => state.coupone.entities;
export const getCouponeLoadingStatus = (state: StateSchema) => state.coupone.isLoading;
