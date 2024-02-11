import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { clothReducer } from "entities/Cloth";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        cloth: clothReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });
}
