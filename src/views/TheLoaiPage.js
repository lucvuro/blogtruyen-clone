import { Container, Row, Col, Modal } from "react-bootstrap";
import BannerComponent from "../components/BannerComponent";
import SideBarComponent from "../components/SideBarComponent";
import TruyenHayComponent from "../components/TruyenHayComponent";
import TruyenMoiDangComponent from "../components/TruyenMoiDangComponent";
import "./TheLoaiPage.scss";
import NavBar from "./NavBar";
const TheLoaiPage = () => {
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
            <div className="theloai-container">
              <div className="theloai-container-tieude">
                <span>THỂ LOẠI NẤU ĂN</span>
              </div>
              <div className="theloai-container-noidung">
                <span>Nội dung về đầu bếp, các mon ăn</span>
              </div>
              <div className="theloai-container-listtruyen">
                <div className="theloai-container-listruyen-sapxep-container">
                  <span>Sắp xếp theo: </span>
                  <span className="theloai-label ">Tên truyện</span>
                  <span className="theloai-label">Số chương</span>
                  <span className="theloai-label">Lượt xem</span>
                  <span className="theloai-label">Bình luận</span>
                  <span className="theloai-label">Thời gian</span>
                </div>
                <div className="listtruyen">
                  <div className="title">
                    <span>CÓ 73 TRUYỆN</span>
                  </div>
                  <div className="list-wrap">
                    <Row style={{textAlign: "center",fontWeight: "bold",padding:"8px 0"}}>
                      <Col md="6">
                        <span>Tên truyện</span>
                      </Col>
                      <Col md="2">
                        <span>Số chương</span>
                      </Col>
                      <Col md="2">
                        <span>Lượt xem</span>
                      </Col>
                      <Col md="2">
                        <span>Bình luận</span>
                      </Col>
                    </Row>
                    <Row className="item">
                      <Col md="6">
                        <span>1. 34-sai Mushoku-san (100% không drop)</span>
                      </Col>
                      <Col md="2">
                        <span>8</span>
                      </Col>
                      <Col md="2">
                        <span>25.472</span>
                      </Col>
                      <Col md="2">
                        <span>21</span>
                      </Col>
                    </Row>
                  </div>
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
export default TheLoaiPage;
