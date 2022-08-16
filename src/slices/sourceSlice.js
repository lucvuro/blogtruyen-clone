import { createSlice } from "@reduxjs/toolkit";

const sourceSlice = createSlice({
  name: "sources",
  initialState: {
    currentSources: null,
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
      state.currentSources = action.payload;
      state.set.error = false;
    },
    setFail: (state) => {
      state.set.loading = false;
      state.set.error = true;
    },
  },
});

const { reducer, actions } = sourceSlice;
export const { setStart, setSuccess, setFail } = actions;
export default reducer;
