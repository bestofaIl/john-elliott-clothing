import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { clothReducer } from "entities/Cloth";
import { tipReducer } from "entities/Tip/model/slice/tipSlice";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        cloth: clothReducer,
        tip: tipReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });
}
