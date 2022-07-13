import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFeching: false,
      error: false,
    },
    register: {
      error: false,
      errorCode: null,
      isSuccess: false,
    },
    logout: {
      error: false,
      loading: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFeching = true;
    },
    loginSuccess: (state, action) => {
      state.login.currentUser = action.payload;
      state.login.isFeching = false;
      state.login.error = false;
    },
    loginFail: (state, action) => {
      state.login.error = true;
      state.login.isFeching = false;
    },
    registerSuccess: (state) => {
      state.register.error = false;
      state.register.errorCode = null;
      state.register.isSuccess = true;
    },
    registerFail: (state, action) => {
      state.register.error = true;
      state.register.errorCode = action.payload;
      state.register.isSuccess = false;
    },
    logoutStart: (state) => {
      state.logout.loading = true
    },
    logoutSuccess: (state) => {
      state.logout.loading = false;
      state.login.currentUser = null;
      state.logout.error = false;
    },
    logoutFail: (state) => {
      state.logout.loading = false;
      state.logout.error = true;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = authSlice;
export const {
  loginStart,
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
  logoutStart,
  logoutSuccess,
  logoutFail,
} = actions;
export default reducer;
