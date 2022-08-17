import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthorContext } from "../../App";
import AddMangaComponent from "./AddMangaComponent";
import { addMangaToDB } from "../../../api/mangaAPI";
import { useDispatch } from "react-redux";
import { createAxios } from "../../../api/axiosClient";
const AddMangaPage = (props) => {
  const { user, path } = props;
  const dispatch = useDispatch();
  const axiosClient = createAxios(user, dispatch);
  const { listAuthors, listCategories, listSources } =
    useContext(AuthorContext);
  const [authorList, setAuthorList] = useState([]);
  useEffect(() => {
    const tempList = [];
    listAuthors?.forEach((item) => {
      let value = item._id;
      let label = item.name;
      tempList.push({ value: value, label: label });
    });
    setAuthorList(tempList);
  }, []);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const tempList = [];
    listCategories?.forEach((item) => {
      let value = item._id;
      let label = item.name;
      tempList.push({ value: value, label: label });
    });
    setCategoryList(tempList);
  }, []);
  const [sourceList, setSourceList] = useState([]);
  useEffect(() => {
    const tempList = [];
    listSources?.forEach((item) => {
      let value = item._id;
      let label = item.name;
      tempList.push({ value: value, label: label });
    });
    setSourceList(tempList);
  }, []);
  const statusList = [
    { value: "completed", label: "Hoàn Thành" },
    { value: "uncomplete", label: "Chưa Hoàn Thành" },
    { value: "droped", label: "Đã Ngưng" },
  ];
  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "hxjjcfo0");
    formData.append("api_key", "133624421193269");
    formData.append("timestamp", (Date.now() / 1000) | 0);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dpahh768g/image/upload",
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }
    );
    const data = res.data;
    return data.secure_url;
  };
  const handleonSubmit = async (data) => {
    try {
      const secure_url = await uploadImage(data.fileImage[0]);
      // const formData = new FormData();
      // formData.append("name", data.name);
      // formData.append("image", secure_url);
      // formData.append("sumary", data.sumary);
      // formData.append("anotherName", data.anotherName);
      // formData.append("userID", user._id);
      // formData.append("authors", data.authors);
      // formData.append("sources", data.sources);
      // formData.append("categories", data.categories);
      // formData.append("status", data.status);
      const authors = []
      const sources = []
      const categories = []
      for (let author of data.authors){
        authors.push(author.value)
      }
      for (let category of data.categories){
        categories.push(category.value)
      }
      for (let source of data.sources){
        sources.push(source.value)
      }
      const dataToServer = {
        name: data.name,
        image: secure_url,
        sumary: data.sumary,
        anotherName: data.anotherName,
        userID: user._id,
        authors: authors,
        sources: sources,
        categories: categories,
        status: data.status.value
      }
      await addMangaToDB(user, dataToServer, dispatch, axiosClient);
      toast.success("Thêm truyện thành công")
    } catch (err) {
      toast.error(err)
    }
  };
  return (
    <>
      <AddMangaComponent
        user={user}
        path={path}
        authorList={authorList}
        categoryList={categoryList}
        sourceList={sourceList}
        statusList={statusList}
        handleonSubmit={handleonSubmit}
      />
    </>
  );
};

export default AddMangaPage;
