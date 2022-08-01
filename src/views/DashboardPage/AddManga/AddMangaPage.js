import { toast } from "react-toastify";
import AddMangaComponent from "./AddMangaComponent";

const AddMangaPage = (props) => {
  const { user, path } = props;
  const handleonSubmit = async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(data));
        toast.success("Thành công");
      }, 3000);
    });
  };
  return (
    <>
      <AddMangaComponent
        user={user}
        path={path}
        handleonSubmit={handleonSubmit}
      />
    </>
  );
};

export default AddMangaPage;
