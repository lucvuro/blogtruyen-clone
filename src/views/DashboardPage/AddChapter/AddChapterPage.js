import AddChapterComponent from "./AddChapterComponent";
import { useEffect, useState } from "react";
import { getMangasFromUser } from "../../../api/mangaAPI";
import axios from "axios";
import { toast } from "react-toastify";
import { addChapterToDB } from "../../../api/chapterAPI";
import { useDispatch } from "react-redux";
import { createAxios } from "../../../api/axiosClient";
const AddChapterPage = (props) => {
  const [listMangaFromUser, setListMangaFromUser] = useState([]);
  const { user } = props;
  const dispatch = useDispatch()
  const axiosClient = createAxios(user,dispatch)
  const uploadImages = async (files) => {
    const list_link = [];
    const uploaders = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "wnyysmz8");
      formData.append("api_key", "133624421193269");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      return await axios
        .post(
          "https://api.cloudinary.com/v1_1/dpahh768g/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((res) => list_link.push(res.data.secure_url));
    });
    await axios.all(uploaders);
    return list_link;
  };
  useEffect(() => {
    const fethcData = async () => {
      const data = await getMangasFromUser(user._id);
      const temp_list = [];
      data.forEach((element) => {
        temp_list.push({ value: element._id, label: element.name });
      });
      setListMangaFromUser(temp_list);
    };
    fethcData();
  }, []);
  const handleonSubmit = async (data) => {
    try {
      const fileImage = [...data.fileImage];
      const images = await uploadImages(fileImage);
      const dataToServer = {
        name: data.name,
        images: images,
        manga_id: data.manga.value,
      };
      await addChapterToDB(user, dataToServer, dispatch, axiosClient);
      toast.success("Thêm chương thành công")
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
      <AddChapterComponent
        listManga={listMangaFromUser}
        handleonSubmit={handleonSubmit}
      />
    </>
  );
};

export default AddChapterPage;
