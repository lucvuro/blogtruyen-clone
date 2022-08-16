import { setStart, setSuccess, setFail } from "../slices/mangaSlice";

export const setMangaList = async (user, dispatch, axiosClient) => {
  dispatch(setStart());
  try {
    let res = await axiosClient.get("/manga/getallManga", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    dispatch(setSuccess(res));
  } catch (err) {
    dispatch(setFail());
  }
};

export const addMangaToDB = async (user, data, dispatch, axiosClient) => {
    try{
        let res = await axiosClient.post("/manga/addManga",data, {
            headers: {
                token: "Bearer " + user.accessToken
            }
        })
    }catch(err){

    }
}
