import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../types/types";

interface ICartState {
  items: { [key: number]: number };
  count: number;
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  count: 0,
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id] += 1;
      } else {
        state.items[id] = 1;
      }
      state.count++;
    },
  },
});

// Alternative approach: createSelector to dynamically calc
// the count everytime the function is called

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
