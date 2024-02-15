import { createAsyncThunk } from "@reduxjs/toolkit";
import { Coupone } from "entities/Coupone";
import { mockDataJs } from "shared/mockData/cloths";
import { mockCoupones } from "shared/mockData/coupones";
import axios from "axios";

export const loadCouponeList = createAsyncThunk<Coupone[], void>(
    "coupone/loadCouponeList",
    async (arg, thunkAPI) => {
        try {
            // const response = await axios.get<Coupone[]>("https://fakestoreapi.com/products/1");
            // if (!response.data) {
            //     throw new Error();
            // }
            return mockCoupones;
            // return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
