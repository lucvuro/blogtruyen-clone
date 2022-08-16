import { setStart, setSuccess, setFail } from "../slices/sourceSlice";

export const setSourceList = async (user, dispatch, axiosClient) => {
  dispatch(setStart());
  try {
    let res = await axiosClient.get("/source/getallSource", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    dispatch(setSuccess(res));
  } catch (err) {
    dispatch(setFail());
  }
};
