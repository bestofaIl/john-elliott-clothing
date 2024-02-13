import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockDataJs } from "shared/mockData/cloths";
import { Cloth } from "entities/Cloth";

export const loadClothList = createAsyncThunk<Cloth[], void>(
    "cloth/loadClothList",
    async (arg, thunkAPI) => {
        try {
            // const response = await axios.get<Cloth[]>("https://fakestoreapi.com/products/1");
            // if (!response.data) {
            //     throw new Error();
            // }
            return mockDataJs;
            // return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
