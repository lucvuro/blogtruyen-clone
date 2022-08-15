import {
  loginFail,
  loginStart,
  loginSuccess,
  registerFail,
  registerSuccess,
  logoutStart,
  logoutSuccess,
  logoutFail,
} from "../slices/authSlice";

export const loginUser = async (user, dispatch, axiosClient) => {
  dispatch(loginStart());
  try {
    const url = `auth/login`;
    let res = await axiosClient.post(
      url,
      {
        username: user.username,
        password: user.password,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(loginSuccess(res));
    return true;
  } catch (err) {
    dispatch(loginFail());
    return false;
  }
};

export const registerUser = async (user, dispatch, axiosClient) => {
  try {
    const url = `auth/register`;
    let res = await axiosClient.post(url, {
      username: user.username,
      password: user.password,
    });
    dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFail(err.response.status));
  }
};

export const logoutUser = async (user, dispatch, axiosClient) => {
  dispatch(logoutStart());
  try {
    const url = `auth/logout`;
    let res = await axiosClient.post(
      url,
      {},
      {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      }
    );
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFail());
    console.log(err);
  }
};
