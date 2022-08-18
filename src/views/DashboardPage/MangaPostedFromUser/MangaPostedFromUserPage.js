import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { getMangasFromUser } from "../../../api/mangaAPI";
import MangaPostedFromUserComponent from "./MangaPostedFromUserComponent";

const MangaPostedFromUserPage = (props) => {
  const { user} = props;
  const [listMangaFromUser, setListMangaFromUser] = useState([]);
  
  useEffect(() => {
    const fethcData = async () => {
      const data = await getMangasFromUser(user._id);
      setListMangaFromUser(data);
    };
    fethcData();
  }, []);
  return (
    <>
      <MangaPostedFromUserComponent listMangaFromUser={listMangaFromUser}/>
    </>
  );
};
export default MangaPostedFromUserPage;
