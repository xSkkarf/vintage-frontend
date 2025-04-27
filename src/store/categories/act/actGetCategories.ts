import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategoryResponse } from "../../../types/types";


const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TCategoryResponse[]>(
        "http://localhost:5005/categories"
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

export default actGetCategories;