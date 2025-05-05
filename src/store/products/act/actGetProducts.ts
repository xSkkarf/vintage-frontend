import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../../types/types";


const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (categoryName: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const params = (categoryName === "all" ? "" : `?categoryPrefix=${categoryName}`)
      const response = await axios.get<TProduct[]>(
        `http://localhost:5005/products${params}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      } else {
        return rejectWithValue("An unexprected error has occured");
      }
    }
  }
);

export default actGetProducts;