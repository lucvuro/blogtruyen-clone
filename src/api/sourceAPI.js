import { setStart, setSuccess, setFail } from "../slices/sourceSlice";
import axios from "axios";
export const setSourceList = async (dispatch) => {
  dispatch(setStart());
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}source/getallSource`
    );
    dispatch(setSuccess(res.data));
  } catch (err) {
    dispatch(setFail());
  }
};

export const getSource = async (id) => {
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}source/${id}`);
    return res.data;
  } catch (err) {}
};
