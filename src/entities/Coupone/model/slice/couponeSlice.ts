import { createSlice } from "@reduxjs/toolkit";
import { CouponeSchema } from "entities/Coupone/model/types/coupone";
import { loadCouponeList } from "entities/Coupone/model/services/loadCouponeList/loadCouponeList";

const initialState: CouponeSchema = {
    entities: [],
    isLoading: true,
};

const couponeSlice = createSlice({
    name: "couponeSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCouponeList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loadCouponeList.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(loadCouponeList.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false;
        });
    },
});

export const { actions: couponeActions } = couponeSlice;
export const { reducer: couponeReducer } = couponeSlice;
