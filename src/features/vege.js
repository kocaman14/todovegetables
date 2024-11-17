import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  name: "",
  price: "",
  box: "",
};

const vegetablesSlice = createSlice({
  name: "toDoLıst",
  initialState,
  reducers: {
    addName: (state, action) => {
      let newName = action.payload;
      state.name = newName.trim();
      console.log(state.name);
    },
    addPrice: (state, action) => {
      if (action.payload >= 0) {
        state.price = action.payload;
      }
    },
    addLıst: (state, action) => {
      if (state.name && state.price) {
        let control = state.price.split("").includes(".");
        if (control) {
          let newPrice = parseFloat(state.price).toFixed(2);
          state.box = [
            ...state.box,
            {
              ...state.total,
              name: state.name,
              price: ` $${newPrice} `,
              id: crypto.randomUUID(),
            },
          ];
        } else {
          state.box = [
            ...state.box,
            {
              ...state.total,
              name: state.name,
              price: ` $${state.price} `,
              id: crypto.randomUUID(),
            },
          ];
        }
      }
      console.log(state.box);
    },
    clearItem: (state, action) => {
      state.box = state.box.filter((ıtems) => ıtems.id !== action.payload);
    },
  },
});

export const { addName, addPrice, addLıst, clearItem } =
  vegetablesSlice.actions;
export default vegetablesSlice.reducer;
