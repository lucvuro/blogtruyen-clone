import { setStart, setSuccess, setFail } from "../slices/mangaSlice";
import { getAuthor } from "./authorAPI";
import { getCategory } from "./categoryAPI";
import { getSource } from "./sourceAPI";
import { getUser } from "./userAPI";
import axios from "axios";
export const setMangaList = async (dispatch) => {
  dispatch(setStart());
  try {
    let data = await axios.get(
      `${process.env.REACT_APP_API_URL}manga/getallManga`
    );
    let res = data.data;
    for (let i = 0; i < res.length; i++) {
      const user = await getUser(res[i].users);
      res[i].users = { _id: res[i].users, name: user.username };
    }
    for (let i = 0; i < res.length; i++) {
      let temp_author = {};
      let author_list = [];
      for (let j = 0; j < res[i].authors.length; j++) {
        const author = await getAuthor(res[i].authors[j]);
        temp_author = { _id: author._id, name: author.name };
        author_list.push(temp_author);
      }
      res[i].authors = author_list;
    }
    for (let i = 0; i < res.length; i++) {
      let temp_source = {};
      let source_list = [];
      for (let j = 0; j < res[i].sources.length; j++) {
        const source = await getSource(res[i].sources[j]);
        temp_source = { _id: source._id, name: source.name };
        source_list.push(temp_source);
      }
      res[i].sources = source_list;
    }
    for (let i = 0; i < res.length; i++) {
      let temp_category = {};
      let category_list = [];
      for (let j = 0; j < res[i].categories.length; j++) {
        const category = await getCategory(res[i].categories[j]);
        temp_category = { _id: category._id, name: category.name };
        category_list.push(temp_category);
      }
      res[i].categories = category_list;
    }
    for (let i = 0; i < res.length; i++) {
      let date = new Date(res[i].createdAt);
      res[i].createdAt = date.toISOString().substring(0, 10);
    }
    dispatch(setSuccess(res));
  } catch (err) {
    dispatch(setFail());
  }
};

export const addMangaToDB = async (user, data, dispatch, axiosClient) => {
  try {
    let res = await axiosClient.post("/manga/addManga", data, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
  } catch (err) {}
};

export const getMangasFromUser = async (user_id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}manga/getMangasFromUser/${user_id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getManga = async (manga_id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}manga/${manga_id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const increaseView = async(manga_id) => {
  try{
    await axios.post( `${process.env.REACT_APP_API_URL}manga/increaseView`,
    {
      manga_id: manga_id
    })
  }catch(err){
    console.log(err)
  }
}
