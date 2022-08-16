import { setStart, setSuccess, setFail } from "../slices/mangaSlice";
import { getUser } from "./userAPI";

export const setMangaList = async (user, dispatch, axiosClient) => {
  dispatch(setStart());
  try {
    let res = await axiosClient.get("/manga/getallManga", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    for (let i = 0; i<res.length;i++){
        const user = await getUser(res[i].users)
        res[i].users = {_id: res[i].users, name: user.username}
    }
    console.log(res)
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
