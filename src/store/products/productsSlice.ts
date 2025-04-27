import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { TProductResponse, TLoading } from "../../types/types";

interface IProductsState {
    records: TProductResponse[]
    loading: TLoading;
    error: string | null;
}


const initialState : IProductsState = {
    records: [],
    loading: "idle",
    error: null
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(actGetProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProducts.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});

export default productsSlice.reducer;

