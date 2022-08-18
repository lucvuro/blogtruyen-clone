import { useParams } from "react-router-dom";
import MangaInfoComponent from "./MangaInfoComponent";
import { getManga} from "../../../api/mangaAPI";
import { useEffect, useState } from "react";
import { getAuthorAndConverToObjectReactSelect } from "../../../api/authorAPI";
import { getAllChapterFromMangaID } from "../../../api/chapterAPI";
const MangaInfoPage = () => {
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
  
  return (
    <>
      <MangaInfoComponent manga={manga} chapters={chapters}/>
    </>
  );
};

export default MangaInfoPage;
