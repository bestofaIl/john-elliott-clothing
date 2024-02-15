import { createSlice } from "@reduxjs/toolkit";
import { ClothSchema } from "../types/cloth";
import { loadClothList } from "../services/loadClothList/loadClothList";

const initialState: ClothSchema = {
    entities: [],
    isLoading: true,
};

export const clothSlice = createSlice({
    name: "cloth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loadClothList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loadClothList.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(loadClothList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    },
});

export const { actions: clothActions } = clothSlice;
export const { reducer: clothReducer } = clothSlice;
