import axios from "axios"
export const getUser = async (id,att) => {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}user/${id}`)
    return res.data
}