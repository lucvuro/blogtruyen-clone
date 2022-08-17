import { setStart, setSuccess, setFail } from "../slices/categorySlice";
import axios from "axios";
export const setCategoryList = async (dispatch) => {
  dispatch(setStart());
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}category/getallCategory`);
    dispatch(setSuccess(res.data));
  } catch (err) {
    dispatch(setFail());
  }
};

export const getCategory = async (id) => {
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}category/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
