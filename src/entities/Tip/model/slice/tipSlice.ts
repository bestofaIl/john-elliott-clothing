import { createSlice } from "@reduxjs/toolkit";
import { TipSchema } from "entities/Tip/model/types/tip";
import { loadTipList } from "entities/Tip/model/services/loadTipList/loadTipList";

const initialState: TipSchema = {
    entities: [],
    isLoading: true,
};

export const tipSlice = createSlice({
    name: "tip",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loadTipList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loadTipList.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(loadTipList.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false;
        });
    },
});

export const { actions: tipActions } = tipSlice;
export const { reducer: tipReducer } = tipSlice;
