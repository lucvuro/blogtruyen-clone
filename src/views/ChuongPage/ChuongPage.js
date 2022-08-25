import ChuongComponent from "./ChuongComponent"
import { useState,useEffect } from "react"
import { getAllChapterFromMangaID, getAllChapterFromMangaIDReactSelect, getChapter } from "../../api/chapterAPI"
import { useParams } from "react-router-dom"
import { getManga } from "../../api/mangaAPI"
const ChuongPage = () => {
    const {chapter_id} = useParams()
    const [chapter,setChapter] = useState()
    const [manga,setManga]= useState()
    const [listChapter,setListChapter] = useState([])
    useEffect(() =>{
        const fecthData = async() => {
            let res_chapter= await getChapter(chapter_id)
            setChapter(res_chapter)
            let list_chapters = await getAllChapterFromMangaIDReactSelect(res_chapter.manga)
            setListChapter(list_chapters)
            let res_manga = await getManga(res_chapter.manga)
            setManga(res_manga)
        }
        fecthData()
    },[])
    return(
        <>
        <ChuongComponent chapter={chapter} manga={manga} list_chapters={listChapter}/>
        </>
    )
}

export default ChuongPage