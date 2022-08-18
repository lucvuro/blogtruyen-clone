import BannerComponent from "../components/BannerComponent";
import TruyenHayComponent from "../components/TruyenHayComponent";
import TruyenMoiDangComponent from "../components/TruyenMoiDangComponent";
import { Container, Row, Col } from "react-bootstrap";
import "./TruyenPage.scss";
import { useEffect, useState } from "react";
import SideBarComponent from "../components/SideBarComponent";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { getAllChapterFromMangaID } from "../api/chapterAPI";
import { increaseView } from "../api/mangaAPI";
const TruyenPage = () => {
  const [isSorted, setisSorted] = useState(false);
  const { id } = useParams();
  const [listChapters, setlistChapters] = useState([]);
  const listMangas = useSelector((state) => state.mangas.currentMangas);
  const [manga, setManga] = useState();
  const history = useHistory();
  useEffect(() => {
    const temp_list = listMangas.filter((item) => item._id === id);
    if (temp_list.length <= 0) {
      history.push("/");
    } else {
      setManga(temp_list[0]);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllChapterFromMangaID(id);
      setlistChapters(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const increaseViews = async()=>{
      await increaseView(id)
    }
    increaseViews();
  },[])
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <Container className="homepage">
        <Row>
          <BannerComponent />
        </Row>
        <Row className="mt-5">
          <Col className="mt-3" md="8">
            <div className="truyen-info">
              <Row>
                <div className="tieude">{manga?.name}</div>
              </Row>
              <Row>
                <Col md="12">
                  <div className="thumb">
                    <img
                      className="image-truyen"
                      src={manga?.image}
                      alt={manga?.name}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="sumary">
                    <div className="title">SƠ LƯỢC</div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: manga?.sumary }}
                    ></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="description">
                    <p>
                      <span>Tên khác: </span>
                      <span style={{ color: "red" }}>
                        {manga?.anotherName}
                      </span>{" "}
                    </p>
                    <p>
                      <span> Tác giả: </span>
                      {manga?.authors?.map((item, index) => {
                        return (
                          <span
                            className="label bg-success text-info"
                            key={item._id}
                          >
                            {item.name}
                          </span>
                        );
                      })}
                    </p>
                    <p>
                      <span> Nguồn: </span>
                      {manga?.sources?.map((item, index) => {
                        return (
                          <span
                            className="label bg-danger text-info"
                            key={item._id}
                          >
                            {item.name}
                          </span>
                        );
                      })}
                    </p>
                    <p>
                      <span> Thể loại: </span>
                      {manga?.categories?.map((item, index) => {
                        return (
                          <span key={item._id}>
                            <a className="category" href="#">
                              {item.name}
                            </a>
                          </span>
                        );
                      })}
                    </p>
                    <p>
                      <span> Đăng bởi: </span>
                      <span>
                        <a className="text-info" href="#">
                          {manga?.users.name}
                        </a>
                      </span>
                      <span> Trạng thái: </span>
                      <span style={{ color: "red" }}>{manga?.status}</span>
                    </p>
                    <p>
                      <span>Số lượt xem: </span>
                      <span style={{ color: "#f0f" }}> {manga?.views}</span>
                      <span> Theo dõi: </span>
                      <span style={{ color: "#f0f" }}> 60</span>
                    </p>
                  </div>
                  <hr />
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="list-chapters">
                    <div className="title">
                      TỔNG HỢP ({listChapters.length} CHƯƠNG)
                      <span
                        className="pull-right icon"
                        onClick={() => setisSorted(!isSorted)}
                      >
                        <i
                          className={
                            isSorted
                              ? "fa-solid fa-arrow-down-a-z"
                              : "fa-solid fa-arrow-up-a-z"
                          }
                        ></i>
                      </span>
                    </div>
                    <div className="chapters">
                      <Row style={{ padding: "5px 0" }}>
                        <Col md="8">
                          <span>Tên chương</span>
                        </Col>
                        <Col md="4">
                          <span>Ngày đăng</span>
                        </Col>
                      </Row>
                      <div className="list-wrap">
                        {listChapters.length <= 0 && (
                          <Row className="item">
                            <Col>Chưa có chương nào</Col>
                          </Row>
                        )}
                        {listChapters.length > 0 &&
                          listChapters.map((item) => {
                            return (
                              <Row className="item" key={item._id}>
                                <Col md="8">
                                  <span style={{ color: "#02770c" }}>
                                    {item.name}
                                  </span>
                                </Col>
                                <Col md="4">
                                  <span> {item.createdAt} </span>
                                </Col>
                              </Row>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="related-item">
                <div className="title">
                  <span>CÁC TRUYỆN CÙNG NGƯỜI ĐĂNG</span>
                </div>
                <div className="related-item-list">
                  <Row>
                    <Col md="3" xs="4">
                      <img
                        className="img-thumbnail image-related"
                        src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg"
                      />
                    </Col>
                    <Col md="3" xs="4">
                      <img
                        className="img-thumbnail image-related"
                        src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg"
                      />
                    </Col>
                    <Col md="3" xs="4">
                      <img
                        className="img-thumbnail image-related"
                        src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg"
                      />
                    </Col>
                    <Col md="3" xs="4">
                      <img
                        className="img-thumbnail image-related"
                        src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mt-3" md="4">
            <SideBarComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TruyenPage;
