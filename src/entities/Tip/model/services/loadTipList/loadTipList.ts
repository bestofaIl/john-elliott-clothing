import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tip } from "entities/Tip/model/types/tip";
import { mockDataTip } from "shared/mockData/tip";

export const loadTipList = createAsyncThunk<Tip[], void>(
    "tip/loadTipList",
    async (arg, thunkAPI) => {
        try {
            const mockTipData = mockDataTip;
            // const response = await axios.get("someurl/tip")
            // if (!response.data) {
            //     throw new Error()
            // }
            return mockTipData;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
