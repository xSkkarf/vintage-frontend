import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TCategoryResponse, TLoading } from "../../types/types";

interface ICategoriesState {
    records: TCategoryResponse[]
    loading: TLoading;
    error: string | null;
}


const initialState : ICategoriesState = {
    records: [],
    loading: "idle",
    error: null
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});

export default categoriesSlice.reducer;

