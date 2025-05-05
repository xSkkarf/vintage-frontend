import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { TProduct, TLoading } from "../../types/types";

interface IProductsState {
    records: TProduct[]
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
        productsCleanUp: (state) => {
            state.records = []
        }
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
export const { productsCleanUp } = productsSlice.actions;
