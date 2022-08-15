import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import { loginSuccess } from "../slices/authSlice";
const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/refresh`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const createAxios = (user, dispatch) => {
  const newInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });

  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      if (!user) {
        return config;
      }
      const decodedaccessToken = jwt_decode(user.accessToken);
      if (decodedaccessToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(loginSuccess(refreshUser));
        config.headers["token"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
      // config.headers["token"] = `Bearer ${user.accessToken}`;
      // return config;
    }
  );

  newInstance.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      throw error;
    }
  );
  return newInstance;
};
