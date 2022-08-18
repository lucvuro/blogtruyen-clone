import axios from "axios";

export const addChapterToDB = async (user, data, dispatch, axiosClient) => {
    try {
      let res = await axiosClient.post("/chapter/addChapter", data, {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      });
    } catch (err) {}
  };

export const getAllChapterFromMangaID = async(manga_id) => {
    try{
        let res = await axios.get(`${process.env.REACT_APP_API_URL}chapter/getallChapter`)
        let data = res.data
        return data
    }catch(err){
        console.log(err)
    }
}