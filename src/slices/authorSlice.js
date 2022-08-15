import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "authors",
  initialState: {
    currentAuthors: null,
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
      state.currentAuthors = action.payload;
      state.set.error = false;
    },
    setFail: (state) => {
      state.set.loading = false;
      state.set.error = true;
    },
  },
});

const { reducer, actions } = authorSlice;
export const { setStart, setSuccess, setFail } = actions;
export default reducer;
