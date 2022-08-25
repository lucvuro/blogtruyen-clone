import { useParams } from "react-router-dom";
import MangaInfoComponent from "./MangaInfoComponent";
import { getManga} from "../../../api/mangaAPI";
import { useEffect, useState } from "react";
import { getAuthorAndConverToObjectReactSelect } from "../../../api/authorAPI";
import { getAllChapterFromMangaID } from "../../../api/chapterAPI";
import { useDispatch } from "react-redux";
import { createAxios } from "../../../api/axiosClient";
import { deleteChapter } from "../../../api/chapterAPI";
import {toast} from 'react-toastify'
const MangaInfoPage = (props) => {
  const {user, path} = props
  const dispatch = useDispatch()
  const axiosClient = createAxios(user,dispatch)
  const { manga_id } = useParams();
  const [manga, setManga] = useState();
  const [chapters, setChapters] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getManga(manga_id);
      const tempListAuthor = [];
      data?.authors?.forEach(async(item) => {
        const author = await getAuthorAndConverToObjectReactSelect(item)
        tempListAuthor.push(author);
      });
      data.authors = tempListAuthor
      setManga(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllChapterFromMangaID(manga_id)
      setChapters(data)
    }
    fetchData();
  },[])
  const deleteChapterFromDB = async(chapter) => {
    try{
      await deleteChapter(user, chapter._id,axiosClient)
      const temp_chapter = chapters.filter(item => item._id !== chapter._id)
      setChapters(temp_chapter)
      toast.success("Deleted Successfully")
    }catch(err){
      toast.error(err)
    }
  }
  return (
    <>
      <MangaInfoComponent manga={manga} chapters={chapters} deleteChapter={deleteChapterFromDB} path={path}/>
    </>
  );
};

export default MangaInfoPage;
