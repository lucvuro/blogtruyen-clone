import { createSlice } from "@reduxjs/toolkit";

const mangaSlice = createSlice({
  name: "mangas",
  initialState: {
    currentMangas: null,
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
      state.currentMangas = action.payload;
      state.set.error = false;
    },
    setFail: (state) => {
      state.set.loading = false;
      state.set.error = true;
    },
  },
});

const { reducer, actions } = mangaSlice;
export const { setStart, setSuccess, setFail } = actions;
export default reducer;
