import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mockDataJs } from "shared/mockData/cloths";
import { Cloth } from "../../types/cloth";

export const loadClothList = createAsyncThunk<Cloth[], void>(
    "cloth/loadClothList",
    async (arg, thunkAPI) => {
        try {
            // const response = await axios.get<Cloth[]>("https://fakestoreapi.com/products/1");
            // if (!response.data) {
            //     throw new Error();
            // }
            const mockTemp = mockDataJs as Cloth[];
            return mockTemp;
            // return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
