import { setStart, setSuccess, setFail } from "../slices/authorSlice";
import axios from "axios";
export const setAuthorList = async (dispatch) => {
  dispatch(setStart());
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}author/getallAuthor`);
    dispatch(setSuccess(res.data));
  } catch (err) {
    dispatch(setFail());
  }
};

export const getAuthor = async (id) => {
   let res = await axios.get(`${process.env.REACT_APP_API_URL}author/${id}`)
   return res.data
}
