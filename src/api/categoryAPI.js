import { setStart, setSuccess, setFail } from "../slices/categorySlice";

export const setCategoryList = async (user, dispatch, axiosClient) => {
  dispatch(setStart());
  try {
    let res = await axiosClient.get("/category/getallCategory", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    dispatch(setSuccess(res));
  } catch (err) {
    dispatch(setFail());
  }
};
