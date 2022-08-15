import { setStart, setSuccess, setFail } from "../slices/authorSlice";

export const setAuthorList = async (user, dispatch, axiosClient) => {
  dispatch(setStart());
  try {
    let res = await axiosClient.get("/author/getallAuthor", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    dispatch(setSuccess(res));
  } catch (err) {
    dispatch(setFail());
  }
};
