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

export const getAllChapterFromMangaID = async (manga_id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}chapter/getallChapter/${manga_id }`
    );
    let data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getAllChapterFromMangaIDReactSelect = async (manga_id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}chapter/getallChapter/${manga_id}`
    );
    let data = res.data;
    let temp_list = []
    for (let ele of data){
      temp_list.push({value: ele._id, label: ele.name})
    }
    return temp_list;
  } catch (err) {
    console.log(err);
  }
};
export const getChapter = async (chapter_id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}chapter/${chapter_id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteChapter = async (user, chapter_id, axiosClient) => {
  try {
    await axiosClient.delete(`chapter/delete`, {
      data: {
        chapter_id: chapter_id,
      },
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
