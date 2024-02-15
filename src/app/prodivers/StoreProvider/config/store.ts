import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { clothReducer } from "entities/Cloth";
import { tipReducer } from "entities/Tip/model/slice/tipSlice";
import { couponeReducer } from "entities/Coupone";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        cloth: clothReducer,
        tip: tipReducer,
        coupone: couponeReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
