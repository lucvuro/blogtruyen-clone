import AddMangaComponent from "./AddMangaComponent";

const AddMangaPage = (props) => {
    const {user} = props
    return (
        <>
        <AddMangaComponent user={user}/>
        </>
    )
}

export default AddMangaPage;