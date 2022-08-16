import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    currentCategories: null,
    set: {
      loading: false,
      error: false,
    },
  },
  reducers: {
    setStart: (state) => {
      state.set.loading = true;
    },
    setSuccess: (state, action) => {
      state.set.loading = false;
      state.currentCategories = action.payload;
      state.set.error = false;
    },
    setFail: (state) => {
      state.set.loading = false;
      state.set.error = true;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { setStart, setSuccess, setFail } = actions;
export default reducer;
