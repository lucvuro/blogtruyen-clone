import { Container } from "react-bootstrap";
import "./scss/ChuongPage.scss";
import Select from "react-select";
import { useEffect , useState} from "react";
const ChuongComponent = (props) => {
  const { chapter,manga,listChapter} = props;
  const customStyles = {
    ///.....
    menuPortal: (provided) => ({ ...provided, zIndex: 999 }),

    ///.....
  };

  return (
    <>
      <Container>
        <div className="headerchuong">
          <div className="headerchuong_tenchuong">
            <h1>{chapter?.name}</h1>
          </div>
          <div className="headerchuong_select">
            <Select
              options={listChapter}
              menuPosition={"fixed"}
              styles={customStyles}
              placeholder="Chọn tác giả..."
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ChuongComponent;
